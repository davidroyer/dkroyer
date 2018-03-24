const axios = require('axios')

const _ = require('lodash');

module.exports = {
  head: {
    titleTemplate: '%s - David Royer - Front End Web Developer',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Personal site of David Royer, Front-End Web Designer and Developer'
      },
      {
        property: 'og:image',
        content: 'https://www.davidroyer.me/site.jpg'
      },
      {
        property: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        property: 'twitter:site',
        content: '@davidroyer_'
      },
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Roboto'
      }
    ]
  },

  manifest: {
    name: 'David Royer',
    description: 'Personal site of David Royer, Front-End Web Designer and Developer',
    theme_color: '#188269'
  },

  plugins: [{
    src: '~/plugins/vue-resource.js',
    ssr: false
  }],


  modules: [
    // 'nuxtent',
    ['@nuxtjs/pwa', { icon: false }],
    '@nuxtjs/bulma', ['@nuxtjs/google-analytics', {
      ua: 'UA-56060335-5'
    }],
  ],


  loading: {
    color: '#3B8070'
  },


  css: [{
      src: '~/assets/css/main.scss',
      lang: 'scss'
    },
    'prismjs/themes/prism-coy.css',
  ],

  build: {
    postcss: {
      plugins: {
        'postcss-cssnext': {
          features: {
            customProperties: false
          }
        }
      }
    },

    extractCSS: true,

    extend(config, ctx) {}
  },

  env: {
    baseUrl: process.env.BASE_URL || "https://fire-tests.firebaseio.com",
    fbAPIKey: "AIzaSyDi-EfdKQoaQ1klE4dhv87TzHEC_3NvnsM"
  },

  generate: {
    routes: function() {
      return axios.get('https://nuxtfireapi.firebaseio.com/posts.json')
        .then((res) => {
          return _.map(res.data, function(post, key) {
            return {
              route: `/blog/${post.slug}`,
              payload: post
            }
          })

        })
    }
  },

  router: {
    middleware: 'menu'
  }

}
