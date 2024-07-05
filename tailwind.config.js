module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mascot-python': "url('/public/')",
        'mascot-java': "url('/public/')",
      }},
  },
  plugins: [],
}
