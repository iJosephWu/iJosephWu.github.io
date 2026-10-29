import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";

const isGitHubPages =
  process.env.GITHUB_PAGES === "true" || process.env.npm_lifecycle_event === "build:pages";

export default defineConfig({
  plugins: [react(), tailwindcss(), ...(isGitHubPages ? [] : [cloudflare()])],
  server: {
    host: "127.0.0.1",
    port: 5175,
    strictPort: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4175,
  },
});
