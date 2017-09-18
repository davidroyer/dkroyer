/*
** nuxtent config
*/
const Prism = require('prismjs')

module.exports = {
  content: [
    ['blog', {
      page: '/blog/_slug',
      permalink: "/:slug",
      generate: ['get', 'getAll'],
      isPost: false
    }]
  ],
  api: {
    baseURL: ''
  },
  parsers: {
    md: {
      highlight: (code, lang) => {
        return Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
      }
    }
  }
  // api: {
  //  	baseURL: process.env.NODE_ENV === 'production'
	//     ? 'http://davidroyer.github.io'
	//     : 'http://0.0.0.0:8088'
 // 	}
}
