/** @type {import('tailwindcss').config} */
import daisyui from "daisyui";

export default {
  content: [
   "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        light: {
          // Base colors
          'base-100': 'oklch(98% 0.022 95.277)',
          'base-200': 'oklch(96% 0.059 95.617)',
          'base-300': 'oklch(92% 0.12 95.746)',
          'base-content': 'oklch(41% 0.112 45.904)',

          // Semantic colors
          primary: 'oklch(87% 0.169 91.605)',
          'primary-content': 'oklch(27% 0.077 45.635)',

          secondary: 'oklch(0% 0 0)',
          'secondary-content': 'oklch(100% 0 0)',

          accent: 'oklch(87% 0.006 286.286)',
          'accent-content': 'oklch(14% 0.005 285.823)',

          neutral: 'oklch(47% 0.137 46.201)',
          'neutral-content': 'oklch(98% 0.022 95.277)',

          info: 'oklch(54% 0.245 262.881)',
          'info-content': 'oklch(97% 0.014 254.604)',

          success: 'oklch(62% 0.194 149.214)',
          'success-content': 'oklch(98% 0.018 155.826)',

          warning: 'oklch(64% 0.222 41.116)',
          'warning-content': 'oklch(98% 0.016 73.684)',

          error: 'oklch(59% 0.249 0.584)',
          'error-content': 'oklch(97% 0.014 343.198)',

          // Custom variables
          '--radius-selector': '0.5rem',
          '--radius-field': '1rem',
          '--radius-box': '2rem',
          '--size-selector': '0.25rem',
          '--size-field': '0.25rem',
          '--border': '1px',
          '--depth': '0',
          '--noise': '1',
        },
      },
    ],
  },
};