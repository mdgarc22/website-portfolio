import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import tailwind
import tailwindcss from '@tailwindcss/vite'
//import path
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resovle: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    }
    // alias: {
    //   src: "/src",
    // }
  },
  // base url for github pages
  base: "/website-portfolio/",
  plugins: [react()],
})
