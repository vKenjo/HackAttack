module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'general-background': "url('src/assets/GENERAL/BACKGROUND_ONLY.svg')",
        'mascot-python': "url('/public/')",
        'mascot-java': "url('/public/')",
      }},
  },
  plugins: [],
}
