const LOOPS_API_BASE = "https://app.loops.so/api/v1";

/**
 * Get Loops API key
 */
function getApiKey(): string {
  const apiKey = process.env.LOOPS_API_KEY;
  if (!apiKey) {
    throw new Error("LOOPS_API_KEY is not configured");
  }
  return apiKey;
}

/**
 * Make a request to Loops API
 */
async function loopsRequest(endpoint: string, method: string, body?: object) {
  const apiKey = getApiKey();

  const response = await fetch(`${LOOPS_API_BASE}${endpoint}`, {
    method,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    const error = new Error(
      `Loops API error: ${response.status} - ${errorText}`,
    );
    (error as Error & { status: number }).status = response.status;
    throw error;
  }

  return response.json();
}

/**
 * Create a contact in Loops
 */
export async function createContact(params: {
  email: string;
  firstName: string;
  lastName: string;
  company?: string;
  source?: string;
  userGroup?: string;
  subscribed?: boolean;
  customFields?: Record<string, string | number | boolean>;
}) {
  try {
    const response = await loopsRequest("/contacts/create", "POST", {
      email: params.email,
      firstName: params.firstName,
      lastName: params.lastName,
      company: params.company || undefined,
      source: params.source || "website",
      userGroup: params.userGroup,
      subscribed: params.subscribed ?? true,
      ...params.customFields,
    });

    return { success: true, data: response };
  } catch (error: unknown) {
    // Handle duplicate contact (409 Conflict)
    if (
      error instanceof Error &&
      (error as Error & { status?: number }).status === 409
    ) {
      return {
        success: false,
        duplicate: true,
        error: "Contact already exists",
      };
    }
    throw error;
  }
}

/**
 * Update an existing contact in Loops
 */
export async function updateContact(params: {
  email: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  userGroup?: string;
  source?: string;
  customFields?: Record<string, string | number | boolean>;
}) {
  const response = await loopsRequest("/contacts/update", "PUT", {
    email: params.email,
    ...(params.firstName && { firstName: params.firstName }),
    ...(params.lastName && { lastName: params.lastName }),
    ...(params.company && { company: params.company }),
    ...(params.userGroup && { userGroup: params.userGroup }),
    ...(params.source && { source: params.source }),
    ...params.customFields,
  });

  return { success: true, data: response };
}

/**
 * Send an event to Loops (for triggering automations)
 */
export async function sendEvent(params: {
  email: string;
  eventName: string;
  eventProperties?: Record<string, string | number | boolean>;
}) {
  const response = await loopsRequest("/events/send", "POST", {
    email: params.email,
    eventName: params.eventName,
    eventProperties: params.eventProperties,
  });

  return { success: true, data: response };
}

/**
 * Send a transactional email
 */
export async function sendTransactionalEmail(params: {
  transactionalId: string;
  email: string;
  dataVariables?: Record<string, string | number>;
}) {
  const response = await loopsRequest("/transactional", "POST", {
    transactionalId: params.transactionalId,
    email: params.email,
    dataVariables: params.dataVariables,
  });

  return { success: true, data: response };
}

// ============================================
// Application-specific helper functions
// ============================================

/**
 * Register a new beta user
 * `name` wird server-side in firstName/lastName gesplittet
 */
export async function registerBetaUser(params: {
  email: string;
  name: string;
  company: string;
  newsletter?: boolean;
}) {
  const nameParts = params.name.trim().split(/\s+/);
  const firstName = nameParts[0] || params.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  // 1. Create or update contact
  const contactResult = await createContact({
    email: params.email,
    firstName,
    lastName,
    company: params.company,
    source: "beta_registration",
    userGroup: "beta_users",
    subscribed: params.newsletter ?? true,
  });

  // If contact already exists, update it
  if (!contactResult.success && contactResult.duplicate) {
    await updateContact({
      email: params.email,
      userGroup: "beta_users",
      source: "beta_registration",
    });
  }

  // 2. Send beta_signup event (triggers automation)
  try {
    await sendEvent({
      email: params.email,
      eventName: "beta_signup",
      eventProperties: {
        company: params.company,
        firstName,
      },
    });
  } catch (error) {
    console.error("Failed to send beta_signup event:", error);
  }

  return { success: true };
}

/**
 * Register a contact form lead
 */
export async function registerContactLead(params: {
  email: string;
  name: string;
  company?: string;
  message: string;
}) {
  const nameParts = params.name.trim().split(/\s+/);
  const firstName = nameParts[0] || params.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  const contactResult = await createContact({
    email: params.email,
    firstName,
    lastName,
    company: params.company,
    source: "contact_form",
    userGroup: "contact_leads",
    subscribed: false,
    customFields: {
      lastContactMessage: params.message,
    },
  });

  if (!contactResult.success && contactResult.duplicate) {
    await updateContact({
      email: params.email,
      source: "contact_form",
      customFields: {
        lastContactMessage: params.message,
      },
    });
  }

  try {
    await sendEvent({
      email: params.email,
      eventName: "contact_form_submitted",
      eventProperties: {
        firstName,
        ...(params.company && { company: params.company }),
      },
    });
  } catch (error) {
    console.error("Failed to send contact_form_submitted event:", error);
  }

  return { success: true };
}

/**
 * Send welcome email to new beta user
 */
export async function sendBetaWelcomeEmail(params: {
  email: string;
  name: string;
  company: string;
}) {
  const templateId = process.env.LOOPS_BETA_WELCOME_TEMPLATE_ID;

  if (!templateId) {
    console.warn(
      "LOOPS_BETA_WELCOME_TEMPLATE_ID not configured, skipping welcome email",
    );
    return { success: false, reason: "template_not_configured" };
  }

  const firstName = params.name.trim().split(/\s+/)[0] || params.name;

  return sendTransactionalEmail({
    transactionalId: templateId,
    email: params.email,
    dataVariables: {
      firstName,
      company: params.company,
    },
  });
}

/**
 * Send confirmation email after contact form submission
 */
export async function sendContactConfirmEmail(params: {
  email: string;
  name: string;
}) {
  const templateId = process.env.LOOPS_CONTACT_CONFIRM_TEMPLATE_ID;

  if (!templateId) {
    console.warn(
      "LOOPS_CONTACT_CONFIRM_TEMPLATE_ID not configured, skipping confirm email",
    );
    return { success: false, reason: "template_not_configured" };
  }

  const firstName = params.name.trim().split(/\s+/)[0] || params.name;

  return sendTransactionalEmail({
    transactionalId: templateId,
    email: params.email,
    dataVariables: {
      firstName,
    },
  });
}
