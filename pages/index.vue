<template>
  <section class="container" >
      <div class="postsNavigation">
        <template v-for="post in posts">
          <nuxt-link class="" :key="post.slug" :to="'/posts/'+post.slug">
            {{post.title}}
            <!-- <div v-html="post.description"></div> -->
          </nuxt-link>
        </template>
      </div>
  </section>
</template>

<script>
// import axios from 'axios'
import Logo from '~components/Logo.vue'
import axios from '~plugins/axios'

export default {
  layout: 'home',
  async asyncData({params}) {
    const PostsObject = await import(`~/static/api/posts.json`)

    return {
      posts: PostsObject
    }
  },
  // async asyncData({params}) {
  //   let slug = params.slug
  //   const {data} = await axios.get(`/api/posts.json`)
  //
  //   return {
  //     posts: data
  //   }
  // },
  components: {
    Logo
  },
  data() {
    return {
      user: null
    }
  },
  created () {

  },
  methods: {
  }
}
</script>

<style lang="scss">
.postsNavigation {
  a {
    margin: 1em;
  }
}
</style>
