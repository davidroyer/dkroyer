module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.js'),
    require('autoprefixer')({ grid: true }),
    require('postcss-flexbugs-fixes')
  ]
}
