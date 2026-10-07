import type { NextConfig } from "next";
import os from "os";

function localDevOrigins() {
  const hosts = new Set<string>(["localhost", "127.0.0.1", "0.0.0.0"]);

  for (const addrs of Object.values(os.networkInterfaces())) {
    for (const addr of addrs ?? []) {
      if (addr.internal) continue;
      // Normalize family: modern Node uses "IPv4", older builds used 4.
      const family = String(addr.family);
      if (family === "IPv4" || family === "4") {
        hosts.add(addr.address);
      }
    }
  }

  return [...hosts];
}

const nextConfig: NextConfig = {
  // Next.js 16 blocks /_next/* from LAN IPs unless listed here.
  // Without this, the HTML loads but client JS never hydrates, so
  // navbar, hero animations, and scroll stay stuck in their initial state.
  allowedDevOrigins: localDevOrigins(),
};

export default nextConfig;
