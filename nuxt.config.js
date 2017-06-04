module.exports = {
  /*
  ** Headers of the page
  */
  ssr: false,
  head: {
    title: 'David Royer - Web Designer & Developer',
    titleTemplate: '%s - David Royer - Web Designer & Developer',
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
  plugins: [
    // ssr: false to only include it on client-side
    // { src: '~plugins/fireAuth.js', ssr: false }
  ],
  // router: {
  //   base: '/dkroyer/'
  // },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  css: [
    { src: '~assets/css/main.scss', lang: 'scss'}
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['firebase']
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
