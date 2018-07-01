<template>
<div class="blog">
  <v-hero class="page-heading">
    <v-headline class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white" :tag="1">
      Blog Posts
    </v-headline>
  </v-hero>

  <v-wrapper>
    <div class="px-2">
      <div class="-mx-2 flex flex-wrap justify-around">

        <div class="card-wrapper px-2" v-for="(post, index) in posts" :key="index">
          <v-card class="shadow-lg px-4 py-2">
            <div slot="header" class="leading-tight font-bold text-xl mb-6">
              <nuxt-link class="card-header-link no-underline hover:underline" :to="post.permalink">{{post.title}}</nuxt-link>
            </div>

            <p slot="content" class="mt-6 text-grey-darker" v-text="post.description"></p>

            <template slot="footer">
              <nuxt-link v-for="(postTag, index) in post.tags" :key="index" class="no-underline inline-block bg-grey-lighter rounded-full px-3 pt-1 mt-1 mb-2 text-sm font-semibold text-grey-darker mr-2" :to="'/tags/' + postTag | slugify">
                #{{postTag}}
              </nuxt-link>
            </template>
          </v-card>
        </div>

      </div>
    </div>
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

<style lang="scss">
.card-wrapper {
  max-width: 400px;
}
</style>
