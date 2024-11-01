/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgGreen: "#f0f8f5",
        iconGreen: "var(--icon-green)",
        bgGray: "var(--bg-gray)",
        hoverBg: "var(--hover-bg)",
        textGreen: "#048d5a",
        mainRed: "#d00000",
        contract: "#C89F5C",
      },
    },
  },
  plugins: [],
};
