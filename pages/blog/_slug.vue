<template>
  <section class="container blogPost">
      <hero :title="post.title" ></hero>
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
    // margin-bottom: 1em;
    text-align: center;
  }
  hr {
    margin: 2.5em 0;
  }

  .content {
    padding-left: 30px;
    color: #4c4c4c;
    // font-size: 1em;
    font-size: 1.05em;
    h1 {
      margin-left: -20px;
      color: #4c4c4c;
    }
  }
}
</style>
