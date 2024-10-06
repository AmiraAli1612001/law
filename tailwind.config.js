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
        bgGreen: "var(--bg-green)",
        iconGreen: "var(--icon-green)",
        bgGray: "var(--bg-gray)",
        hoverBg: "var(--hover-bg)",
        textGreen: "var(--text-green)",
        mainRed: "var(--main-red)",
        contract: "#C89F5C",
      },
    },
  },
  plugins: [],
};
