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
      colors: {},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["nord"],
  },
};
export default config;
