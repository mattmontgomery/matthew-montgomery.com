/**
 * @type {import('tailwindcss')}
 */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr",
      },
      gridTemplateCols: {
        layout: "10rem 1fr",
      },
    },
  },
  plugins: [],
};
