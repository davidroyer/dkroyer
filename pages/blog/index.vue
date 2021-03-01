<template>
  <v-page-wrapper>
    <page-banner text="My Blog Posts" />

    <v-row justify="center" align="center" class="py-12">
      <v-col cols="11" md="10" lg="8">
        <v-row class="card-grid">
          <v-col
            v-for="{ title, description, slug } in posts"
            :key="slug"
            cols="12"
            sm="6"
          >
            <v-card class="d-flex flex-column">
              <v-card-title>
                <nuxt-link :to="`/blog/${slug}`" v-text="title" />
              </v-card-title>
              <v-card-text v-text="description" />
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-page-wrapper>
</template>

<script>
export default {
  asyncData({ $cmsApi }) {
    const posts = $cmsApi.get('blog')
    return { posts }
  },

  head() {
    const { title, description } = this.$store.state.nav.blog
    return {
      title,

      meta: this.$seo({
        title,
        description
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-card {
  &__title {
    flex: 1;
  }
}
</style>
