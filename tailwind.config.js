/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F6F2EA',
        sand: '#EAE4D2',
        sage: '#4F6B58',
        'sage-dark': '#33433A',
        charcoal: '#22211C',
        'charcoal-soft': '#5B5848',
      },
      fontFamily: {
        heading: ['Lora', 'serif'],
        body: ['"Public Sans"', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(34, 33, 28, 0.06)',
      },
    },
  },
  plugins: [],
}
