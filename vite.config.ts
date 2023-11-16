import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: "/src",
      components: "/src/components",
      containers: "/src/containers",
      context: "/src/context",
      hooks: "/src/hooks",
    },
  },
});
