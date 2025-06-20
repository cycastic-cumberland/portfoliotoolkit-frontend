import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  })
}
