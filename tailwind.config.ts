import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0px", opacity: 0 },
          to: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
        },
        "accordion-up": {
          from: { height: "var(--radix-collapsible-content-height)", opacity: 1 },
          to: { height: "0px", opacity: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.13s linear",
        "accordion-up": "accordion-up 0.13s linear",
      },
    },
  },
  plugins: [],
};
export default config;
