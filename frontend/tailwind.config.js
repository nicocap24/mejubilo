/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pensionfi': {
          green: '#00A19C', // Color verde de Pensionfi.com
          'green-dark': '#007A76', // Versión más oscura del verde
        },
      },
    },
  },
  plugins: [],
} 