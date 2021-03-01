const netlifySiteUrl =
  process.env.DEPLOY_PRIME_URL || 'https://localtest.netlify.app'

export default {
  url:
    process.env.NODE_ENV === 'production'
      ? netlifySiteUrl
      : 'http://localhost:3000',

  title: `Nuxtify 2021 Template`,
  description: `A Nuxt.js template for my sites`,

  analyticsId: 'UA-56060335-5'
}
