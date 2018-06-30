<template>
  <div class="blog">
    <v-hero class="page-heading">
      <v-headline class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white" :tag="1">
        Blog Posts
      </v-headline>
    </v-hero>
    <v-wrapper>
      <ul class="my-2 sm:my-6 py-4 post-list flex flex-wrap justify-start sm:justify-around">
        <li v-for="(post, index) in posts" :key="index" class="mx-4 my-4">
          <nuxt-link class="font-medium text-2xl no-underline hover:underline" :to="post.permalink">{{ post.title }}</nuxt-link>
          <div class="tags flex">
            <div class="tag text-sm mr-4" v-for="(postTag, index) in post.tags" :key="index">
              <nuxt-link class="tag-link no-underline font-bold" :to="'/tags/' + postTag | slugify">
                <v-icon font-size="12px" name="tag"></v-icon> {{postTag}}
              </nuxt-link>
            </div>
          </div>
        </li>
      </ul>
    </v-wrapper>
  </div>
</template>

<script>
const metaDescription = 'Blog Articles on Web Development'

export default {
  async asyncData({ app, route }) {
    const posts = await app.$content('/blog').getAll()
    return {
      posts
    }
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: metaDescription
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: metaDescription
        }
      ]
    }
  }
}
</script>
