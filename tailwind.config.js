/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "elden-gold": "var(--gold)",
        "elden-beige": "var(--beige)",
        "light-green": "var(--light-green)",
        "light-green-lighter": "var(--light-green-lighter)",
        "dark-green": "var(--dark-green)",
        "light-brown": "var(--light-brown)",
        "dark-brown": "var(--dark-brown)",
        "light-olive": "var(--light-olive)",
        "light-olive-lighter": "var(--light-olive-lighter)",
        "dark-olive": "var(--dark-olive)",
        "dark-blue": "var(--dark-blue)",
      },
    },
  },
  plugins: [],
};
