// Import required Vite dependencies
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration (https://vitejs.dev/config/)
export default defineConfig({
  // Configure plugins - React support for Vite
  plugins: [react()],

  // Configure module resolution
  resolve: {
    // Set up path aliases for cleaner imports
    alias: {
      "@": "/src", // Maps '@' to the 'src' directory
    },
  },
});