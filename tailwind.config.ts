import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkTeal: "#192524",
        midTeal: "#3c5759",
        greyTeal: "#959d90",
        lightTeal: "#d1ebdb",
        lightGreyTeal: "#d0d5ce",
        lighterGreyTeal: "#efece9",
      },
    },
  },
  plugins: [],
} satisfies Config;
