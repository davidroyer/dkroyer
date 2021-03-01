<template>
  <v-app>
    <v-site-header />

    <v-main>
      <v-container>
        <nuxt keep-alive />
      </v-container>
    </v-main>

    <lazy-v-mobile-nav />
    <lazy-v-site-footer />
  </v-app>
</template>

<script>
import siteConfig from '@@/site.config'

export default {
  computed: {},
  head() {
    return {
      titleTemplate: (titleChunk) => {
        // If undefined or blank then we don't need the hyphen
        return titleChunk
          ? `${titleChunk} - ${siteConfig.title}`
          : siteConfig.title
      }
    }
  }
}
</script>
