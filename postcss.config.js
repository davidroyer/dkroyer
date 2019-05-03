module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    // require('autoprefixer')({ grid: true }),
    require('autoprefixer')({
      grid: true,
      browsers: ['>1%', 'ie > 10', 'last 2 versions']
    }),
    require('postcss-flexbugs-fixes'),
    require('postcss-responsive-type')()
  ]
}
