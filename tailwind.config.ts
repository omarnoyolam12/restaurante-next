import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lora': ['Lora', 'serif']
      },
      backgroundImage: {
        "testimonial": "linear-gradient(60deg, rgba(24,24,27,1) 50%, rgba(39,39,42,0.3) 100%), url('/img/testimonial.jpg')"
      },
      listStyleImage: {
        checkmark: 'url("/img/check.svg")',
      },
    },
  },
  plugins: [],
};
export default config;
