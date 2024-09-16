import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        'background-secondary': 'var(--background-secondary)',
        'background-btn': 'var(--background-btn)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'box-shadow': 'var(--box-shadow)',
      },
      backgroundImage: {
        day: 'url(/bg-day.png)',
        night: 'url(/bg-night.png)',
      },
    },
  },
  plugins: [],
};
export default config;
