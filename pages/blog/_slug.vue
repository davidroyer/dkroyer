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
    text-align: center;
  }
  hr {
    margin: 2.5em 0;
  }

  .content {
    color: #4c4c4c;
    font-size: 1.05em;
    h1 {
      color: #4c4c4c;
    }
    .subtitle {
      font-weight: 100;
    }
  }
}
</style>
