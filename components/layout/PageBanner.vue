<template>
  <v-row
    class="py-3 py-sm-6 py-md-9 py-lg-12 px-2 page-banner white--text full-width"
    align="center"
    justify="center"
  >
    <v-col cols="12" class="text-center text-white">
      <h1
        class="text-h4 font-weight-bold text-sm-h4 text-md-h3"
        v-text="text"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Page Banner Heading'
    }
  },
  computed: {
    useMobileMenu() {
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>

<style lang="scss" scoped>
.page-banner {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: linear-gradient(
    141deg,
    rgba(62, 66, 100, 0.6509803922),
    rgb(44 62 81),
    71%,
    rgba(62, 66, 100, 0.6509803922)
  );
}
</style>
