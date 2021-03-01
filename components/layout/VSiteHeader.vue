<template>
  <v-app-bar fixed flat app>
    <v-toolbar-title>
      <nuxt-link class="name-logo text-h5 text-sm-h4" to="/">
        <span class="first-name primary--text">David</span>
        <span class="last-name">Royer</span>
      </nuxt-link>
    </v-toolbar-title>

    <v-spacer />

    <v-desktop-nav
      v-if="$vuetify.breakpoint.mdAndUp"
      class="hidden-sm-and-down"
    />

    <v-app-bar-nav-icon
      aria-label="Toggle menu"
      class="hidden-md-and-up"
      @click="$store.commit('setDrawer', true)"
    />
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.v-application {
  .v-toolbar__title a {
    color: inherit;
    text-decoration: none;
  }

  .name-logo {
    letter-spacing: -2px !important;
    font-weight: 900 !important;
  }
  .last-name {
    color: #84939f;
    margin-left: -5px;
  }
}
</style>
