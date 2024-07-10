import { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        xs: '14px',
        sm: '16px',
        md: '18px',
        lg: '22px',
        xl: '24px',
        '2xl': '32px'
      },      
    },
  },

  plugins: [],
}

export default config