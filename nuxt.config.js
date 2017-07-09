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
    ['@nuxtjs/google-analytics', { ua: 'UA-56060335-5' }]
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
  build: {
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
