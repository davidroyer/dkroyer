<template>
  <div>
    <h1 v-text="tag.title" />
    <pre>{{ tag }}</pre>
  </div>
</template>

<script>
export default {
  asyncData({ $cmsApi, params }) {
    const tag = $cmsApi.get('articles/tags', params.slug)
    return { tag }
  },

  head() {
    return {
      title: this.tag.title
    }
  }
}
</script>

<style>
img {
  max-width: 800px;
}
</style>
