<template>
  <section class="container">
      <h1 class="title">{{post.title}}</h1>
      <div>{{post.preview}}</div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
import axios from '~plugins/axios'

function retrievePostFromSlug(posts, slug) {
  for(let postKey in posts) {
    if (postKey === slug) {
      return posts[postKey]
    }
  }
}

export default {
  async asyncData({params}) {
    const {data} = await axios.get(`/api/posts.json`)

    return {
      post: retrievePostFromSlug(data, params.slug)
    }
  }
}
</script>

<style>
</style>
