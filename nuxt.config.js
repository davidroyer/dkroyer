import { resolve, join } from 'path'
import PurgecssPlugin from 'purgecss-webpack-plugin'
import {
  siteTitle,
  siteDescription,
  twitterUsername,
  ogTitle,
  ogType,
  siteUrl,
  ogImage,
  fontAwesomeIcons,
  shortName,
  themeColor,
  analyticsID
} from './website.config'

// const isProduction = process.env.NODE_ENV === 'production'
// const baseUrl = isProduction ? config.siteUrl : 'http://localhost:3000'

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || []
  }
}
const purgecssWhitelistPatterns = [
  /^__/,
  /^fa/,
  /^v-/,
  /^page-/,
  /^nuxt/,
  /^scale/,
  /^slide/,
  /^enter/,
  /^leave/
]

export default {
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
    titleTemplate: `%s - ${siteTitle}`,
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
        content: siteDescription
      },
      {
        property: 'twitter:site',
        content: twitterUsername
      },
      {
        property: 'twitter:creator',
        content: twitterUsername
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: ogTitle
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: ogType
      },
      {
        hid: 'og:host',
        property: 'og:host',
        content: siteUrl
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${siteUrl}/${ogImage}`
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
  plugins: [
    '~/plugins/global-components',
    '~/plugins/filters',
    {
      src: '~/plugins/directives',
      ssr: false
    }
    // { src: '~/plugins/nuxt-client-init.js', ssr: false } // Use this when needing SSR
  ],

  /**
   * Custom Nuxt modules
   * @see https://nuxtjs.org/guide/modules/
   */
  modules: [
    '@droyer/nuxtcms',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-analytics',
    '@nuxtjs/pwa',
    // 'nuxtent',
    'nuxt-fontawesome'
  ],

  sitemap: {
    hostname: siteUrl
  },
  /**
   * Nuxt fontawesome module
   * @type {Object}
   */
  fontawesome: {
    component: 'fa-icon',
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: fontAwesomeIcons.brands
      },
      {
        set: '@fortawesome/free-regular-svg-icons',
        icons: fontAwesomeIcons.regular
      },
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: fontAwesomeIcons.solid
      }
    ]
  },
  /**
   * PWA Manifest
   * @see http://nuxt-pwa/manifest
   */
  manifest: {
    name: ogTitle,
    short_name: shortName,
    description: siteDescription,
    theme_color: themeColor
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
    id: analyticsID
  },

  /**
   * Sitemap
   * @see https://github.com/nuxt-community/sitemap-module
   */
  // sitemap: {
  //   path: '/sitemap.xml',
  //   hostname: config.siteUrl,
  //   cacheTime: 1000 * 60 * 150,
  //   generate: true,
  //   interval: 1000,
  //   routes() {
  //     return Promise.all([
  //       axios.get(`${config.siteUrl}/_nuxt/content/blog/_all.json`),
  //       axios.get(`${config.siteUrl}/_nuxt/content/projects/_all.json`)
  //     ]).then(data => {
  //       const posts = data[0]
  //       const projects = data[1]
  //       return posts.data
  //         .map(post => {
  //           return post.permalink
  //         })
  //         .concat(
  //           projects.data.map(project => {
  //             return project.permalink
  //           })
  //         )
  //     })
  //   }
  // },
  /*
   ** Build configuration
   */
  build: {
    // analyze: true,

    // babel: {
    //   plugins: ['babel-plugin-tailwind']
    // },
    extractCSS: true,

    postcss: {
      plugins: [
        require('postcss-import'),
        require('postcss-url'),
        require('tailwindcss')('./tailwind.config.js'),
        require('postcss-nested'),
        require('autoprefixer'),
        require('postcss-flexbugs-fixes'),
        require('postcss-responsive-type')()
      ],
      preset: {
        stage: 0,
        autoprefixer: {
          cascade: false,
          grid: true
        }
      }
    },
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
            mode: 'postcss',
            keyframes: false,
            paths: sync([
              join(__dirname, './src/pages/**/*.vue'),
              join(__dirname, './src/layouts/**/*.vue'),
              join(__dirname, './src/components/**/*.vue')
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
      // if (isDev && isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/,
      //     options: {
      //       fix: true
      //     }
      //   })
      // }
    }
  },

  css: ['@/assets/styles/main.css'],

  router: {
    middleware: ['menu']
  },

  generate: {
    fallback: true
  }
}
