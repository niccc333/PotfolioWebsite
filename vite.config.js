import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  publicDir: "Assets",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        aboutMe: resolve(__dirname, "about-me/index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        faces: resolve(__dirname, "faces/index.html"),
        calendar: resolve(__dirname, "calendar/index.html"),
      },
    },
  },
});
