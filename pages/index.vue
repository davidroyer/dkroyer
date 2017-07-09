<template>
  <section class="container">
      <h1 class="title">Home File</h1>
      <!-- <template v-for="post in posts">
        <nuxt-link class="card" :key="post.slug" :to="'/posts/'+post.slug">{{post.title}}</nuxt-link>
      </template> -->
  </section>
</template>

<script>
// import axios from 'axios'
import Logo from '~components/Logo.vue'
import axios from '~plugins/axios'

export default {
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

<style>

</style>
