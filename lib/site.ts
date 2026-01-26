import { execSync } from "child_process";

export const SITE_NAME = "Michaela Arratoon Pearson";
export const SITE_TITLE =
  "Michaela Arratoon Pearson — Project Manager / Delivery Consultant";
export const SITE_DESCRIPTION =
  "Freelance PM and delivery support for software, digital, and cultural projects.";
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
