<template>
  <section class="container blogPost">
      <h1 class="title">{{$route.params.slug}}</h1>
      <div class="CONTENT" v-html="content"></div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
import axios from '~plugins/axios'

const MD = require('markdown-it')();

function retrievePostFromSlug(posts, slug) {
  for(let postKey in posts) {
    if (postKey === slug) {
      return posts[postKey]
    }
  }
}


export default {
  async asyncData ({params}) {
    const {attributes, body} = await import(`~/static/blog/${params.slug}.md`)

    return {
      // ...attributes
      attributes: attributes,
      content: MD.render(body)
    }
  }
}
</script>

<style lang="scss">
.blogPost {
  width: 100%;
  text-align: left;

  .title {
    margin-bottom: 1em;
  }
}
</style>
