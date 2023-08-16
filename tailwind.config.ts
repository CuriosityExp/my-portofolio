import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      spacing:{
        '500': "500px",
        '600': "600px",
        '700': "700px",
        '800': "700px"
      }
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e2bc8c",
          secondary: "#b5ce48",
          accent: "#f4c79f",
          neutral: "#e78574",
          "base-100": "#ebe9f1",
          info: "#92b5e3",
          success: "#53eac4",
          warning: "#f19b22",
          error: "#f51950",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
