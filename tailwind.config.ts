import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }
        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }
        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
        widescreen: "1536px",
        // => @media (min-width: 1536px)
      },
      colors: {   
        // primary: {
        //   25: "#fafafa",
        //   50: "#f1f5f9",
        //   100: "#f4f4f5",
        //   200: "#e4e4e7",
        //   300: "#d4d4d8",
        //   400: "#a1a1aa",
        //   500: "#71717a",
        //   600: "#52525b",
        //   700: "#3f3f46",
        //   800: "#27272a",
        //   900: "#18181b",
        //   950: "#09090b",
        // },
        primary: {
          25: "#f6fefc",
          50: "#f0fdf9",
          100: "#ccfbef",
          200: "#99f6e0",
          300: "#5fe9d0",
          400: "#2ed3b7",
          500: "#15b79e",
          600: "#11999e",
          700: "#137065",
          800: "#125d56",
          900: "#134e48",
        },
        error: {
          25: "#fffbfa",
          50: "#fef3f2",
          100: "#fee4e2",
          200: "#fecdca",
          300: "#fda29b",
          400: "#f97066",
          500: "#f04438",
          600: "#d92d20",
          700: "#b42318",
          800: "#912018",
          900: "#7a271a",
        },
        warning: {
          25: "#fffcf5",
          50: "#fffaeb",
          100: "#fef0c7",
          200: "#fedf89",
          300: "#fec84b",
          400: "#fdb022",
          500: "#f79009",
          600: "#dc6803",
          700: "#b54708",
          800: "#93370d",
          900: "#7a2e0e",
        },
        success: {
          25: "#f6fef9",
          50: "#ecfdf3",
          100: "#d1fadf",
          200: "#a6f4c5",
          300: "#6ce9a6",
          400: "#32d583",
          500: "#12b76a",
          600: "#039855",
          700: "#027a48",
          800: "#05603a",
          900: "#054f31",
        },
      },
    },
  },
  plugins: [],
};
export default config;
