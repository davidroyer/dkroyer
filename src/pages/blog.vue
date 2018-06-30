<template>
  <div class="blog">
    <v-hero class="page-heading">
      <v-headline class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white" :tag="1">
        Blog Posts
      </v-headline>
    </v-hero>
    <v-wrapper>
      <v-card class="bg-white"></v-card>
    </v-wrapper>
  </div>
</template>

<script>
const metaDescription = 'Blog Articles on Web Development'

export default {
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
