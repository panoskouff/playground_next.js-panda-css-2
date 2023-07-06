import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: ['./components/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: {
        backgroundPrimary: { value: '#fff' },
        backgroundSecondary: { value: '#f9f3e7' },
      },
      spacing: {
        csm: { value: '16px' },
      },
    },
    extend: {
      // breakpoints: {
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1280px',
      //   '2xl': '1536px',
      // },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
});
