<template>
  <section class="container blogPost">
    <!-- @click.stop="$router.push('/postsview')"  -->
      <button class="reversed postNavigation button is-info is-outlined" @click.stop ="$router.push('/')">
        <!-- <span class="icon"> -->
          <i class="fa fa-arrow-left"></i>
        <!-- </span> -->
      </button>
      <hero :title="title" v-if="description" :subtitle="description"></hero>
      <!-- <h1 class="title" v-text=""></h1> -->
      <div class="content" v-html="content"></div>
  </section>
</template>

<script>
import Logo from '~components/Logo.vue'
import axios from '~plugins/axios'
import Hero from '~components/Hero.vue'

const MD = require('markdown-it')();

// function retrievePostFromSlug(posts, slug) {
//   for(let postKey in posts) {
//     if (postKey === slug) {
//       return posts[postKey]
//     }
//   }
// }

export default {
  head () {
    return {
      title: this.title
    }
  },
  components: {
    Hero
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
.siteContent {
  .content {
    padding: 3em .5em
  }
}
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
    bottom: 1em;
    left: 1em;
    position: fixed;
    z-index: 9999999;
    background-color: white !important;
    &:hover, &:focus {
      background-color: #3273dc !important;
    }
    @media (min-width: 1000px) {
      // z-index: 999;
      top: 11px;
      left: 20px;
      // top: 25px;
    }
  }
}
</style>
