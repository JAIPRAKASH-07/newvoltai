import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "/voltaibot/", // 👈 Must match your GitHub repo name exactly
});
