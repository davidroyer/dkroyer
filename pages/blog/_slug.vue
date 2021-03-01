<template>
  <v-page-wrapper>
    <page-banner :text="post.title" />
    <article class="py-4 py-md-8 article" v-html="post.html" />
  </v-page-wrapper>
</template>

<script>
export default {
  asyncData({ $cmsApi, params }) {
    const post = $cmsApi.get('blog', params.slug)
    return { post }
  },

  head() {
    const { title, description } = this.post

    return {
      title,
      meta: this.$seo({ title, description })
    }
  }
}
</script>

<style src="@droyer/nuxtcms/lib/assets/blog-styles.css"></style>
<style src="@@/node_modules/prismjs/themes/prism-tomorrow.css"></style>
