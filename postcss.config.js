module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer')({ grid: true }),
    require('postcss-flexbugs-fixes'),
    require('postcss-responsive-type')()
  ]
}
