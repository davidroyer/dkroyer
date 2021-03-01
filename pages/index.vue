<template>
  <v-page-wrapper>
    <home-banner />

    <v-row justify="center" class="py-4 py-md-12">
      <v-col cols="12" sm="10" md="8" class="text-subtitle-1">
        <article v-html="content.html" />
        <div>
          <p>
            A few of my more popular Github repos are listed in the section
            below if you'd like to see some of my work.
          </p>

          <p>
            You can also check out my
            <nuxt-link to="/blog">Blog</nuxt-link> to see the articles I've
            written.
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center" class="relative py-12">
      <div class="repos"></div>

      <v-col cols="12">
        <h2
          class="mb-4 text-center repos-heading white--text text-h4 text-md-h3 font-weight-light"
        >
          My Popular Repos
        </h2>
      </v-col>
      <v-col cols="11" md="10" lg="10">
        <github-projects />
      </v-col>
    </v-row>
  </v-page-wrapper>
</template>

<script>
export default {
  asyncData({ $cmsApi }) {
    const content = $cmsApi.get('content', 'home-intro')
    return { content }
  }
}
</script>

<style lang="scss" scoped>
.repos {
  @extend .full-width;
  background-color: #2f365f;
  position: absolute;
  height: 100%;
  z-index: 0;

  &-heading {
    color: #ebebeb !important;
    letter-spacing: -1px !important;
  }

  & + * {
    z-index: 1;
  }
}
</style>
