/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "hsl(179, 81%,29%)",
        "light-cyan": "hsl(179, 81%, 40%)",

        "light-gray-blue": "hsl(215, 5%, 54%)",
        "gray-blue": "hsl(215, 19%,25%)",
        "dark-gray-blue": "hsl(213, 17%, 21%)",

        "very-light-gray": "hsl(26, 11%, 87%)",
        "light-gray": "hsl(210 4% 57%)",

        "very-light-orange": "hsl(26, 11%, 87%)",
        "pale-orange": "hsl(25, 94%, 86%)",

        "very-light-yellow": "hsl(45, 80%, 98%)",
        "light-yellow": "hsl(40, 29%, 94%)",
      },
      backgroundImage: {
        "about-quality": 'url("/assets/about/tablet/bg-quality.png")',
        "about-quality-bg-mb": 'url("/about/mobile/bg-quality.png)',
      },

      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
    },
  },
  plugins: [],
};
