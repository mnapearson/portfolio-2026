import fs from "fs";
import path from "path";
export type Production = {
  slug: string;
  title: string;
  years: string;
  role: string;
  scale?: string;
  duration?: string;
  location?: string;
  summary: string;
  website?: string;
  image?: string;
};

const contentDir = path.join(process.cwd(), "content");

function readJsonFile<T>(filename: string): T {
  const filePath = path.join(contentDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export function getProductions(): Production[] {
  return readJsonFile<Production[]>("productions.json");
}

export function getProduction(slug: string): Production | undefined {
  return getProductions().find((item) => item.slug === slug);
}

export function hasPublicFile(assetPath?: string): boolean {
  if (!assetPath) {
    return false;
  }

  const normalized = assetPath.startsWith("/") ? assetPath.slice(1) : assetPath;
  const fullPath = path.join(process.cwd(), "public", normalized);
  return fs.existsSync(fullPath);
}
