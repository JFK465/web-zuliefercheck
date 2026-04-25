import { execFileSync } from "node:child_process";
import path from "node:path";
import fs from "node:fs";

const REPO_ROOT = process.cwd();
let repoFallback: string | null = null;

function gitLog(relPath: string): string | null {
  try {
    const args = ["log", "-1", "--format=%aI", "--", relPath];
    const out = execFileSync("git", args, {
      cwd: REPO_ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

export function getGitLastmod(relativePath: string): string {
  if (relativePath && fs.existsSync(path.join(REPO_ROOT, relativePath))) {
    const fileDate = gitLog(relativePath);
    if (fileDate) return fileDate;
  }
  if (!repoFallback) {
    repoFallback = gitLog(".") ?? new Date().toISOString();
  }
  return repoFallback;
}
