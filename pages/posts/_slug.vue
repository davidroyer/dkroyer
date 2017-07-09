<template>
  <section class="container blogPost">
    <!-- @click.stop="$router.push('/postsview')"  -->
      <button class="reversed postNavigation" @click.stop ="$router.push('/')"> << Back</button>
      <h1 class="title" v-text="title"></h1>
      <div class="content" v-html="content"></div>
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
  head () {
    return {
      title: this.title
    }
  },
  async asyncData ({params}) {
    const {attributes, body} = await import(`~/static/blog/${params.slug}.md`)

    return {
      ...attributes,
      // attributes: attributes,
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
    text-align: center;
  }
  .postNavigation {
    font-size: .9em;
    padding: .5em .75em;
  }
}
</style>
