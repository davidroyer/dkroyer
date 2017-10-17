<template>
  <div v-if="false"></div>
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
export default {
  name: 'twitter-head-card',
  data: () => ({
    href: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('https://https://www.davidroyer.me/about')
  }),
  head: {
    meta: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@davidroyer_' },
      { name: 'twitter:title', content: 'Nuxt.js Twitter Card' },
      { name: 'twitter:description', content: 'Nuxt.js lets you handle custom headers for your app with vue-meta' },
      { name: 'twitter:image', content: 'https://www.davidroyer.me/post_nuxt-firebase-authentication.jpg' },
      { name: 'twitter:image:alt', content: 'Nuxt.js logo' }
    ]
  }
}
</script>
