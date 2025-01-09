import { resolve } from "path";
import { name } from "./package.json";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({ tsconfigPath: "./tsconfig.app.json", insertTypesEntry: true }),
    react(),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: name,
    },
    ssr: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
