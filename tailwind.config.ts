import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: [
    "./node_modules/flowbite/**/*.{js,ts}",
    "./app.vue",
    "./{components,pages,content}/**/*.{vue,js,ts,jsx,tsx,html,md}",
  ],
  theme: {
    extend: {
      animation: {
        'fade': 'fade 0.5s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': {opacity:'0'},
          '100%': {opacity:"1"},
        },
      },
      colors: {
        primary: colors.slate,
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
} satisfies Config;