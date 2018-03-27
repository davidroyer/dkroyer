const axios = require('axios')
const _ = require('lodash');
const { createApolloFetch } = require('apollo-fetch');
const GRAPHCMS_API = 'https://api.graphcms.com/simple/v1/myBlog'
const gql = require('graphql-tag')
const fetch = createApolloFetch({
  uri: GRAPHCMS_API,
});

const query = `
  query AllPosts {
    allPosts(
      filter: {isPublished: true}
    ) {
      id,
      title,
      slug,
      content,
      tags,
      authors {
        id,
        name,
        avatar {
          id,
          handle,
          url
        }
      }
    }
  }
`

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
    '@nuxtjs/apollo',
    ['@nuxtjs/pwa', { icon: false }],
    '@nuxtjs/markdownit',
    // '@nuxtjs/bulma',
    'nuxt-bulma-slim',
    ['@nuxtjs/google-analytics', {
      ua: 'UA-56060335-5'
    }],
  ],

  markdownit: {
    html: true,
    linkify: true,
    typographer: true,
    injected: true
  },

  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },

  loading: {
    color: '#3B8070'
  },


  css: [{
      src: '~/assets/scss/main.scss',
      lang: 'scss'
    }
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


  generate: {
    fallback: true,
    routes: async function() {
      const {data} = await fetch({query})
      return data.allPosts.map((post) => {
        return {
          route: '/blog/' + post.slug,
          payload: post
        }
      })
    }
  },

  router: {
    middleware: 'menu'
  }

}
