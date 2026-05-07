/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        "firacode": ["Fira Code", "monospace"],
        "title": ["Whitney", "-apple-system", "BlinkMacSystemFont", "Segoe, UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
      }
    },
  },
  plugins: [],
}

