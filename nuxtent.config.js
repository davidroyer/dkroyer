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
}
