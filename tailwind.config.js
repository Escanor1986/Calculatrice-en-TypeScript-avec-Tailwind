/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // "just in time" gestion dynamique des classes de couleurs
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./dist/**/*.html"],
  theme: {
    extend: {
      colors: {
        "custom-text-color": "#EEEEEE",
        "custom-color": "#3B4664",
        "cadran-color": "#181E33",
        "calculator-color": "#252D44",
        "equal-color": "#D14031",
        "reset-del-color": "#647199",
        "button-color": "#E9E3DB",
      },
    },
  },
  plugins: [],
};
