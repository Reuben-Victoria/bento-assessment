import { defineConfig, loadEnv } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      "process.env.VITE_BOOKS_BASE_URL": JSON.stringify(
        env.VITE_BOOKS_BASE_URL
      ),
    },
    plugins: [react(), tsconfigPaths()],
  };
});
