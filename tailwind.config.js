/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary:{
          900:'var(--primary-900)',
          700:'var(--primary-700)'
        },
        success:"var(--success)",
        error:"var(--error)",
        info:"var(--info)",
        warn:"var(--warn)",
      },
      textColor:{
        fore:{
          main:"var(--foreground-rgb)",
          contrast:"var(--foreground-contrast-rgb)"
        },
        primary:{
          900:'var(--primary-900)',
          700:'var(--primary-700)'
        },
        secondary:{
          900:'var(--secondary-900)'
        },
        success:"var(--success)",
        error:"var(--error)",
        info:"var(--info)",
        warn:"var(--warn)",
      },
      fontFamily:{
        body:"var(--font-inter)"
      }
    },
  },
  plugins: [],
}
