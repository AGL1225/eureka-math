/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#6D28D9",
        "secondary": "#0B0E14",
        "accent-cyan": "#00E5FF",
        "accent-gold": "#FFD700",
        "background": "#0B0E14",
        "surface": "rgba(255, 255, 255, 0.05)",
        "surface-bright": "rgba(255, 255, 255, 0.15)",
        "on-background": "#FFFFFF",
        "on-surface": "#FFFFFF",
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
