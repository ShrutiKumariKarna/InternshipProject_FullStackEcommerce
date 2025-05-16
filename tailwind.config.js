/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  // Generated customized theme from daisyui
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        lightTheme: {
          "primary": "#ccadff",
          "secondary": "#1dd3b5",
          "accent": "#c62f58",
          "neutral": "#2f2834",
          "base-100": "#edecf3",
          "info": "#729ed5",
          "success": "#5be6ba",
          "warning": "#bd7905",
          "error": "#fa2e2e",
          body:{
            "background": "#f3f4f6",
          }
        },
      },
    ],
  },
};

export default config;
