<template>
  <section class="container blogPost">
    <!-- @click.stop="$router.push('/postsview')"  -->
      <!-- <button class="reversed postNavigation button is-info is-outlined" @click.stop ="$router.push('/blog')">Back</button> -->
      <hero :title="post.title" ></hero>
      <!-- <nuxtent-body :body="post.body" /> -->
      <div class=" container content" v-html="post.body"></div>
  </section>
</template>

<script>
import Hero from '@/components/Hero'
export default {
  asyncData: async ({ app, params, payload }) => ({
    post: await app.$content('/blog').get(params.slug) || payload
  }),
  components: {
    Hero
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
  .hero > .container {
    max-width: 100%;
  }
  .title {
    margin-bottom: 1em;
    text-align: center;
  }
}
</style>
