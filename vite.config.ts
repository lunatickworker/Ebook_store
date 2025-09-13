import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  // 👇 이 resolve 섹션이 경로 별칭을 설정하는 부분입니다.
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
