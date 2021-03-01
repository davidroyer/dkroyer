import siteConfig from './site.config'

export default {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: null,

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteConfig.description
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/app.scss'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['@/plugins/seo-handler.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/style-resources',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '~/modules/site',
    'nuxt-webfontloader',
    '@droyer/nuxtcms',
    '@nuxtjs/pwa'
    // https://github.com/AlekseyPleshkov/nuxt-social-meta
  ],

  ignore: 'pages/about.vue',

  // This gives access to the SASS inside these files throughtout the entire App
  styleResources: {
    scss: '@/assets/styles/utilities.scss'
  },

  pwa: {
    icon: {
      source: './static/pwa-icon.png'
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    defaultAssets: false,
    optionsPath: 'vuetify.options.js',
    customVariables: ['~/assets/styles/variables.scss'],
    treeShake: true
  },

  // siteConfig: {
  //   title: 'My Title'
  // }

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
}
