import { resolve } from "path";
import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  base: "/",
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
  }
})
