// tailwind.config.js
/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
}
