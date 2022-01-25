/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors");

const baseColor = {
  gray: {
    default: "#F8F7F5",
    100: "#FAFAFA",
    200: "#F5F5F5",
    300: "#EBEBEB",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#555555",
    700: "#1A1A1A",
  },
  info: {
    darker: "#09509D",
    dark: "#2371C6",
    default: "#4393EA",
    light: "#D3E5FA",
    lighter: "#F0F7FF",
  },
  positive: {
    darker: "#0B6732",
    dark: "#19954D",
    default: "#27AE60",
    light: "#BEF0D3",
    lighter: "#E3F6EB",
  },
  warning: {
    darker: "#904E01",
    dark: "#D97A0B",
    default: "#FF8A00",
    light: "#FFE7CA",
    lighter: "#FFF8EF",
  },
  danger: {
    darker: "#76102B",
    dark: "#AF2631",
    default: "#CC3434",
    light: "#EF9784",
    lighter: "#FCE3D6",
  },
};

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      ...colors,
      primary: "#006551",
      cream: "#FCAD10",
      creamLight: "#FBEFDD",
      magenta: "#E22153",
      green: "#006551",
      yellow: "#FCAD10",
    },
    backgroundColor(theme) {
      return {
        ...theme("colors"),
        primary: "#006551",
        ...baseColor,
      };
    },
    extend: {
      fontFamily: {
        interLight: ["Inter-Light"],
        interMedium: ["Inter-Medium"],
        interSemiBold: ["Inter-SemiBold"],
      },
      colors: { ...baseColor },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
