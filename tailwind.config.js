/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xxs: "375px",
      xs: "475px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      // ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        heroCardBigAfter: "-15px 0 0 0 #ffffff",
        // heroCardBigAfter: "-15px 0 0 0 #ff0000 ",
        heroCardBigBefore: "15px 0 0 0 #ffffff ",
        // heroCardBigBefore: "15px 0 0 0 #000000 ",
      },
    },
  },
  plugins: [],
};
