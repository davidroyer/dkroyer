<template>
  <v-page-wrapper>
    <page-banner text="A Little About Me" />
    <article class="py-4 py-md-8" v-html="content.html" />
  </v-page-wrapper>
</template>

<script>
export default {
  asyncData({ $cmsApi }) {
    const content = $cmsApi.get('content', 'about-me')
    return { content }
  },

  head() {
    return {
      meta: this.$seo({
        title: 'About Me',
        description: this.$store.state.nav.about.description
      })
    }
  }
}
</script>
