// import axios from './plugins/axios.js'
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
  /*
  ** Headers of the page
  */
  // mode: 'spa',
  head: {
    title: 'David Royer - Front End Web Developer',
    titleTemplate: '%s - David Royer - Front End Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal site of David Royer. Front-End Web Designer and Developer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,500,700,900|Roboto+Condensed:400,700,700i' }
    ]
  },
  // loaders: [
  //   {
  //     test: /\.md$/,
  //     loaders: ['vue-markdown-loader']
  //   },
  // ],
  plugins: [
    { src: '~/plugins/vue-resource.js', ssr: false }
  ],
  modules: [
    '@nuxtjs/bulma',
    // '@nuxtjs/font-awesome',
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', { ua: 'UA-56060335-5' }],
    // '@nuxtjs/markdownit'
  ],
  // markdownit: {
  //   preset: 'default',
  //   linkify: true,
  //   breaks: true,
  //   use: [
  //     'markdown-it-front-matter'
  //   ]
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  css: [
    // { src: 'bulma/css/bulma.css', lang: 'css'},
    { src: '~/assets/css/main.scss', lang: 'scss'}
  ],
  /*
  ** Build configuration
  */
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  generate: {
    routes: function() {
      return createRoutes(postsObject)
      // let baseURL = process.env.baseUrl
      // return axios.get(`http://localhost:3000/api/posts.json`)
      //
      // .then((response) => {
      //   let posts = response.data
      //   return createRoutes(posts)
      // })
    }
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    // vendor: ['vue-awesome'],
    extractCSS: true,
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        // use: [
        //   'raw-loader',
        //  'markdown-with-front-matter-loader'
        // ]
        use: [ 'markdown-with-front-matter-loader' ]
        // loader: 'markdown-with-front-matter-loader'
        // loader: 'vue-content-loader'
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
