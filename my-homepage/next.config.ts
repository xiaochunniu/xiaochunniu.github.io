import type { NextConfig } from "next";
import { execSync } from "node:child_process";

// Derive last updated month/year from the most recent git commit at build time.
// Falls back to a fixed string to avoid runtime date drift.
const buildLastUpdated = (() => {
  try {
    const raw = execSync("git log -1 --format=%cd --date=format:%B %Y", {
      stdio: ["ignore", "pipe", "ignore"],
    })
      .toString()
      .trim();
    return raw || undefined;
  } catch {
    return undefined;
  }
})();

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "",
  env: {
    NEXT_PUBLIC_LAST_UPDATED: buildLastUpdated ?? "February 2026",
  },
};

export default nextConfig;
