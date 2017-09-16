const axios = require('axios')
const postsObject = require('./static/api/posts.json')

function createRoutes(posts)  {
  var routes = []

  for (let postKey in posts) {
    let post = posts[postKey]
    let route = `/posts/${post.slug}`
    routes.push(route)
  }
  return routes
}

module.exports = {
  head: {
    titleTemplate: '%s - David Royer - Front End Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal site of David Royer, Front-End Web Designer and Developer' },
      {
        property: 'og:image',
        content: 'https://www.davidroyer.me/site.jpg'
      },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@davidroyer_' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preload', as: 'style', href: 'https://fonts.googleapis.com/css?family=Roboto' }
    ]
  },
  manifest: {
    name: 'David Royer',
    description: 'Personal site of David Royer, Front-End Web Designer and Developer',
    theme_color: '#188269'
  },
  plugins: [
    { src: '~/plugins/vue-resource.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', { ua: 'UA-56060335-5' }],
  ],
  loading: { color: '#3B8070' },
  css: [
    { src: '~/assets/css/btest.sass', lang: 'sass'},
    { src: '~/assets/css/main.scss', lang: 'scss'}
  ],
  generate: {
    routes: function() {
      return createRoutes(postsObject)
    }
  },
  build: {
    extractCSS: true,
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: [ 'markdown-with-front-matter-loader' ]
      })
      // if (ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },
  router: {
    middleware: 'menu'
  }
}
