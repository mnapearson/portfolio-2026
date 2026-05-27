import { execSync } from "child_process";

export const SITE_NAME = "Micky Arratoon";
export const SITE_TITLE =
  "Micky Arratoon — Cultural Producer & Founder";
export const SITE_DESCRIPTION =
  "Cultural producer and founder based between Leipzig and Berlin. Building eos archive — an infrastructure project for cultural documentation.";
export const SITE_URL = "https://example.com";

function getLastUpdated(): string {
  if (process.env.NEXT_PUBLIC_LAST_UPDATED) {
    return process.env.NEXT_PUBLIC_LAST_UPDATED;
  }

  try {
    return execSync("git log -1 --format=%cs", {
      stdio: ["ignore", "pipe", "ignore"]
    })
      .toString()
      .trim();
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

export const LAST_UPDATED = getLastUpdated();
