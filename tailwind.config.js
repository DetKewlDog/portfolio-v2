/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "consolas": ["Consolas", "monospace"],
        "segoe-ui": ["Segoe UI", "sans-serif"],
      }
    },
  },
  plugins: [],
}

