<template>
  <v-parallax
    height="700"
    class="full-width"
    :src="require('~/assets/images/blog-me-toy-darken.jpg')"
  >
    <v-row align="center" justify="center" class="banner-row">
      <v-col class="text-center banner-column" cols="12">
        <h1
          class="text-h2 banner-title mb-4 text-sm-h1 font-weight-thin"
          v-text="`Full Stack Developer`"
        />
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner {
  &-column {
    z-index: 10;
  }

  &-title {
    letter-spacing: -3px !important;
    @media (min-width: 400px) and (max-width: 599px) {
      font-size: 4.5rem !important;
      line-height: 4.5rem !important;
    }
  }

  &-row::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom right,
      rgba(32, 35, 58, 0.75),
      rgb(0 0 0)
    );
    opacity: 0.75;
  }
}
</style>
