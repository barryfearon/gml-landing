import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cyber: {
          DEFAULT: "#1E1B4B", // Deep Indigo (Primary Background)
          light: "#3B3486", // Lighter Indigo for UI elements
          dark: "#0C0A2F", // Almost black for deep contrast
          neonBlue: "#00D4FF", // Neon Blue highlights
          neonPurple: "#A020F0", // Vibrant Purple Glow
          neonOrange: "#FF6B00", // Neon Orange Accents
          neonOrangeDark: "#c05202",
          softGray: "#B3B3B3", // Muted Gray for text
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
