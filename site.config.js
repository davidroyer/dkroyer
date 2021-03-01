const netlifySiteUrl =
  process.env.DEPLOY_PRIME_URL || 'https://localtest.netlify.app'

export default {
  url:
    process.env.NODE_ENV === 'production'
      ? netlifySiteUrl
      : 'http://localhost:3000',

  title: `David Royer`,
  description: `Personal site of David Royer, Full Stack Developer.`,

  analyticsId: 'UA-56060335-5'
}
