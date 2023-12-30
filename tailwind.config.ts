import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        customFont: ['"Poppins"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [],
} satisfies Config;
