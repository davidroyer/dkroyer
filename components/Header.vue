<template>
<header class="header has-shadow">
  <div class="container navbarContainer">
      <navbar :navLinks="links"></navbar>
  </div>
</header>
</template>

<script>
import Navbar from './Navbar.vue'
export default {
  components: {
    Navbar
  },
  data() {
    return {
      links:[
          {
            href: '/',
            title: 'Home'
          }, {
            href: '/site',
            title: 'Site Info'
          }, {
            href: '/contact',
            title: 'Contact'
          }, {
            href: '/blog',
            title: 'Blog Posts'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .navbarContainer {
    padding: 0;
  }
</style>
