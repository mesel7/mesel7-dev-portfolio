import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './next/**/*.{ts,tsx,js,jsx}'],
  plugins: [require('@tailwindcss/line-clamp')],
};

export default config;
