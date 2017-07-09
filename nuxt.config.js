// import axios from './plugins/axios.js'
const axios = require('axios')

function createRoutes(posts)  {
  var routes = []

  for(let postKey in posts) {
    let post = posts[postKey]
    let route = `/posts/${post.slug}`
    routes.push(route)
  }
  return routes
}

//
// for(let post in posts) {
//   console.log(post);
//   let route = `/posts/${post.slug}`
//   routes.push(route)
// }
//


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'David Royer - Front End Web Developer',
    titleTemplate: '%s - David Royer - Front End Web Developer',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal site of David Royer. Front-End Web Designer and Developer' }
    ],
    // script: [
    //   { src: 'https://www.gstatic.com/firebasejs/4.1.1/firebase.js' }
    // ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Slab:400,700|Roboto:300,400,500,700,900|Roboto+Condensed:400,700,700i' }
    ]
  },
  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-56060335-5' }],
    // ['@nuxtjs/markdownit', { linkify: true } ]
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  css: [
    // { src: '~assets/css/4mindesign.scss', lang: 'scss'}
    { src: '~assets/css/main.scss', lang: 'scss'}
  ],
  /*
  ** Build configuration
  */
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  generate: {
    routes: function() {
      let baseURL = process.env.baseUrl
      return axios.get(`http://localhost:3000/api/posts.json`)
      .then((response) => {
        let posts = response.data
        return createRoutes(posts)
      })
    }
  },
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      {
         test: /\.md$/,
         use: [ 'json-loader', 'yaml-frontmatter-loader' ]
      }
    ]
    // vendor: ['firebase']
    /*
    ** Run ESLINT on save
    */
    // extend (config, ctx) {
    //   if (ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }


}
