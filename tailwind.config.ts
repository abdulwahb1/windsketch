import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  mode: "jit", // Add this line
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geo: ["Geologica", "sans-serif"],
      },
      letterSpacing: {
        widest: "1.8px",
      },
      boxShadow: {
        shadow_shadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
        sm_box: "0px 0px 12px 0px rgba(0, 0, 0, 0.20)",
      },
      colors: {
        "custom-blue": "#0C2796",
      },
      screens: {
        'xs': '290px',
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    }
  },
  darkMode: "class",
  plugins: [
    nextui({
      addCommonColors: true,
    }),
  ],
};

export default config;
