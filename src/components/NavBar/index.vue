<template>
    <div class="navbar">
      <logo></logo>
      <v-menu-button
        @click="$store.commit('toggleMenuState')"
        :checked="mobileMenuIsActive"
        :class="[ 'nav-btn', {'text-white font-bold': mobileMenuIsActive}]"
        :aria-label="navButtonText"
        :aria-expanded="mobileMenuIsActive ? 'true' : 'false'"
        aria-controls="nav-mobile">
      </v-menu-button>
      <template v-if="isMobile">
        <transition-zoom-center :duration="400">
          <nav-menu id="nav-mobile" v-show="mobileMenuIsActive" :links="navLinksArray"></nav-menu>
        </transition-zoom-center>
        <!-- <transition name="scale">
          <nav-links id="nav-mobile" v-show="mobileMenuIsActive" :links="navLinksArray"></nav-links>
        </transition> -->
      </template>
      <nav-menu v-if="!isMobile" :links="navLinksArray"></nav-menu>
    </div>
</template>

<script>
import NavMenu from './NavMenu'
import Logo from './Logo'

export default {
  name: 'NavBar',
  components: {
    NavMenu,
    Logo
  },

  data: () => ({
    windowWidth: 0,
    windowHeight: 0
  }),

  computed: {
    navLinksArray() {
      return this.$store.state.navLinks
    },

    mobileMenuIsActive() {
      return this.$store.state.menuIsActive
    },

    navButtonText() {
      return this.mobileMenuIsActive ? 'Close' : 'Menu'
    },

    isMobile() {
      return this.windowWidth <= 767
    }
  },

  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth)
      window.addEventListener('resize', this.getWindowHeight)
      //Init
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },

  methods: {
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth
    },

    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight
    }
  },

  destroyed() {
    window.removeEventListener('resize', this.getWindowWidth)
    window.removeEventListener('resize', this.getWindowHeight)
  }
}
</script>
