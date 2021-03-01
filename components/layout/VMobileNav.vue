<template>
  <v-navigation-drawer v-model="drawerState" temporary right app>
    <v-list>
      <v-list-item style="margin-bottom: -10px">
        <v-spacer />
        <v-btn
          icon
          color="secondary"
          class="lighten-5 mr-0"
          aria-label="Close Menu"
          @click="setDrawer(false)"
        >
          <v-icon>$vuetify.icons.close</v-icon>
        </v-btn>
      </v-list-item>

      <v-list-item
        v-for="(route, key) in $store.state.nav"
        :key="key"
        nuxt
        :to="route.to"
      >
        <v-list-item-content>
          <v-list-item-title class="primary--text" v-text="route.label" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['drawer']),
    drawerState: {
      get() {
        return this.drawer
      },
      set(val) {
        this.setDrawer(val)
      }
    }
  },

  methods: {
    ...mapMutations(['setDrawer'])
  }
}
</script>
