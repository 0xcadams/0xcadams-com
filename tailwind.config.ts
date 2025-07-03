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
          from: { height: "0px", opacity: "0", filter: "blur(5px)" },
          to: {
            height: "var(--radix-collapsible-content-height)",
            opacity: "1",
            filter: "blur(0px)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-collapsible-content-height)",
            opacity: "1",
            filter: "blur(0px)",
          },
          to: {
            height: "0px",
            opacity: "0",
            filter: "blur(5px)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.13s ease-in",
        "accordion-up": "accordion-up 0.13s ease-in",
      },
    },
  },
  plugins: [],
};
export default config;
