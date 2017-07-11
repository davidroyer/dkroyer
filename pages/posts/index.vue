<template>
  <section class="container" >
    <section class="hero is-primary is-bold is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title is-2" v-text="$metaInfo.title"></h1>
          <h1 class="subtitle is-4" v-if="subtitle" v-text="subtitle"></h1>
        </div>
      </div>
    </section>
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
import Hero from '~components/Hero.vue'

export default {
  components: {
    Hero
  },
  head () {
    return {
      title: 'Blog Posts'
    }
  },
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
