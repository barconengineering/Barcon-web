import { spawnSync } from "node:child_process";

// Windows sandbox filesystems can reject simultaneous recursive mkdir calls.
// Keep filesystem work serial on Windows while preserving normal builds elsewhere.
const env = { ...process.env };
if (process.platform === "win32") env.UV_THREADPOOL_SIZE = "1";
const result = spawnSync(process.execPath, ["node_modules/next/dist/bin/next", "build", ...process.argv.slice(2)], { stdio: "inherit", env });
if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status ?? 1);
if (process.env.BARENG_STATIC_EXPORT === "true") {
  const prepared = spawnSync(process.execPath, ["scripts/prepare-static.mjs"], { stdio: "inherit" });
  process.exit(prepared.status ?? 1);
}


