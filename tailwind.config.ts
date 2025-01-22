import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Ensure paths are correct
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // Correct key name
      sx: "425px", // Custom breakpoint for 425px
      sm: "600px", // Small devices
      md: "768px", // Tablets
      lg: "1024px", // Laptops
      xl: "1440px", // Desktops
      "2xl": "1535px", // Large screens
    },
    extend: {
      colors: {
        background: "var(--background)", // Custom background variable
        foreground: "var(--foreground)", // Custom foreground variable
      },
    },
  },
  plugins: [],
};

export default config;

