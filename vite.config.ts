import react from "@vitejs/plugin-react";
import { env } from "process";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],

  server: {
    port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
  },
});
