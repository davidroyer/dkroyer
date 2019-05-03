<template>
  <div class="navbar">
    <logo></logo>
    <v-menu-button
      :checked="mobileMenuIsActive"
      :class="['nav-btn', { 'text-white font-bold': mobileMenuIsActive }]"
      :aria-label="navButtonText"
      :aria-expanded="mobileMenuIsActive ? 'true' : 'false'"
      aria-controls="nav-mobile"
      @click="$store.commit('toggleMenuState')"
    >
    </v-menu-button>

    <template v-if="isMobile">
      <transition-zoom-center :duration="400">
        <nav-menu
          v-show="mobileMenuIsActive"
          id="nav-mobile"
          :links="navLinksArray"
        ></nav-menu>
      </transition-zoom-center>
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
      // Init
      this.getWindowWidth()
      this.getWindowHeight()
    })
  },

  destroyed() {
    window.removeEventListener('resize', this.getWindowWidth)
    window.removeEventListener('resize', this.getWindowHeight)
  },

  methods: {
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth
    },

    getWindowHeight(event) {
      this.windowHeight = document.documentElement.clientHeight
    }
  }
}
</script>

<style lang="scss">
.navbar {
  height: 80px;
  @apply .flex .justify-between .items-center .p-4 .border-b .border-grey-lightest;
}
.nav {
  &-list {
    @apply .flex .flex-col .justify-start .list-reset;
  }

  &-btn {
    z-index: 999;
    @apply .text-indigo-darker .font-bold;
  }

  &-item {
    position: relative;
  }

  a {
    position: relative;
    @apply .font-bold .uppercase .py-2 .tracking-wide .text-sm .no-underline .border-transparent;

    .nav-link-text {
    }

    &.nuxt-link-exact-active .nav-link-text,
    &.nuxt-link-exact-active:hover .nav-link-text {
      @apply .font-medium .border-b-3 .border-white;
    }
  }
  @media (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // transform: scale(0);
    // width: 0px;
    // height: 0px;
    z-index: 99;
    overflow-y: scroll;
    overflow-x: hidden;
    @apply .bg-black;

    &-list {
      padding-bottom: 2em;
      padding-top: 100px;
    }
    &-item {
      margin: 0.5rem 0;
      @apply .block .px-4;
    }

    a {
      @apply .text-white .block .font-thin .text-lg .text-center;
      font-size: 1.5rem;
      font-weight: 200;
    }
  }
}
@screen md {
  .nav {
    &-list {
      @apply .flex-row .justify-end .items-center .bg-transparent;
    }

    &-btn {
      @apply .hidden;
    }

    &-item {
      @apply .block .px-4;
    }

    a {
      @apply .text-grey-darkest;

      &.nuxt-link-exact-active .nav-link-text,
      &.nuxt-link-exact-active:hover .nav-link-text {
        @apply .border-indigo-dark;
      }
    }
  }
}
</style>
