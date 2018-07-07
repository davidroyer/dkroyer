const path = require('path')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const config = require('./website.config')
const axios = require('axios')
const isProduction = process.env.NODE_ENV === 'production'
const baseUrl = isProduction ? config.siteUrl : 'http://localhost:3000'

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}
const purgecssWhitelistPatterns = [/^__/, /^fa/, /^page-/, /^nuxt/, /^scale/, /^slide/, /^enter/, /^leave/]

module.exports = {
  /**
   * Custom source and build directories
   * @see https://nuxtjs.org/api/configuration-srcdir
   * @see https://nuxtjs.org/api/configuration-builddir
   */
  srcDir: './src',
  buildDir: './build',

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: `%s - ${config.siteTitle}`,
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: config.siteDescription
      },
      {
        property: 'twitter:site',
        content: config.twitterUsername
      },
      {
        property: 'twitter:creator',
        content: config.twitterUsername
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: config.ogTitle
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: config.ogType
      },
      {
        hid: 'og:host',
        property: 'og:host',
        content: config.siteUrl
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${config.siteUrl}/${config.ogImage}`
      },
      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    bodyAttrs: {
      class: 'font-sans leading-normal'
    }
  },

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#6574cd'
  },

  /**
   * Custom Nuxt plugins
   * @see https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/global-components', '~/plugins/filters'],

  /**
   * Custom Nuxt modules
   * @see https://nuxtjs.org/guide/modules/
   */
  modules: ['@nuxtjs/sitemap', '@nuxtjs/google-analytics', '@nuxtjs/pwa', 'nuxtent', 'nuxt-fontawesome'],

  /**
   * Nuxt fontawesome module
   * @type {Object}
   */
  fontawesome: {
    component: 'fa-icon',
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: config.fontAwesomeIcons.brands
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: config.fontAwesomeIcons.regular
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: config.fontAwesomeIcons.solid
      }
    ]
  },
  /**
   * PWA Manifest
   * @see http://nuxt-pwa/manifest
   */
  manifest: {
    name: config.ogTitle,
    short_name: config.shortName,
    description: config.siteDescription,
    theme_color: config.themeColor
  },

  /**
   * PWA Icon
   * @see http://nuxt-pwa/icon
   */
  icon: true,

  /**
   * Google analytics
   * @see https://github.com/nuxt-community/analytics-module
   */
  'google-analytics': {
    id: config.analyticsID
  },

  /**
   * Sitemap
   * @see https://github.com/nuxt-community/sitemap-module
   */
  sitemap: {
    path: '/sitemap.xml',
    hostname: config.siteUrl,
    cacheTime: 1000 * 60 * 150,
    generate: true,
    interval: 1000,
    routes() {
      return Promise.all([
        axios.get(`${config.siteUrl}/_nuxt/content/blog/_all.json`),
        axios.get(`${config.siteUrl}/_nuxt/content/projects/_all.json`)
      ]).then(data => {
        const posts = data[0]
        const projects = data[1]
        return posts.data
          .map(post => {
            return post.permalink
          })
          .concat(
            projects.data.map(project => {
              return project.permalink
            })
          )
      })
    }
  },
  /*
   ** Build configuration
   */
  build: {
    // analyze: true,
    extractCSS: true,

    extend(config, { isDev, isClient }) {
      /**
       * Use purgecss when building for production
       */
      if (!isDev) {
        config.plugins.push(
          /**
           * PurgeCSS
           * @see https://github.com/FullHuman/purgecss
           */
          new PurgecssPlugin({
            keyframes: false,
            paths: glob.sync([
              path.join(__dirname, './src/pages/**/*.vue'),
              path.join(__dirname, './src/layouts/**/*.vue'),
              path.join(__dirname, './src/components/**/*.vue')
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ['html', 'js', 'vue', 'css', 'scss']
              }
            ],
            whitelist: ['html', 'body'],
            whitelistPatterns: purgecssWhitelistPatterns
          })
        )
      }
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  css: ['~/assets/styles/main.scss'],

  router: {
    middleware: ['menu']
  },

  generate: {
    fallback: true
    // interval: 1000,
    // routes() {
    //   return Promise.all([
    //     axios.get(`${baseUrl}/_nuxt/content/blog/_all.json`),
    //     axios.get(`${baseUrl}/_nuxt/content/projects/_all.json`)
    //   ]).then(data => {
    //     const posts = data[0]
    //     const projects = data[1]
    //     return posts.data
    //       .map(post => {
    //         return {
    //           route: '/post/' + post.permalink,
    //           payload: post
    //         }
    //       })
    //       .concat(
    //         projects.data.map(page => {
    //           return {
    //             route: project.permalink,
    //             payload: project
    //           }
    //         })
    //       )
    //   })
    // }
  }
}
