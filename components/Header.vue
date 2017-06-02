<template>
<header class="header">
  <!-- <img src="../assets/img/logo.png" alt="Nuxt.js Logo" class="logo" /> -->
  <nav>
    <li v-for="(link, key) in links">
      <nuxt-link exact :to="link.href">{{link.title}}</nuxt-link>
    </li>
  </nav>
</header>
</template>

<script>
export default {
  data() {
    return {
      links: [{
        href: '/',
        title: 'Home'
      }, {
        href: '/about',
        title: 'About'
      }, {
        href: '/contact',
        title: 'Contact'
      }]
    }
  }
}
</script>

<style lang="scss">
header {
    // background: #009688;
    background: #35495e;
    text-align: center;
    padding: 1em;
}

.header {
    background: #40526b;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    z-index: 60;
    box-shadow: 0 2px 5px 0 rgba(40, 31, 31, 0.56), 0 2px 10px 0 rgba(32, 32, 32, 0.52);
    padding: .5em 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      max-height: 100%;
    }
}
h1 {
    color: white;
    margin: 0;
    // font-family: "Source Sans Pro", Arial, sans-serif;
    font-weight: 400;
}
nav {
    display: flex;
    justify-content: center;

    li {
        list-style-type: none;
          margin: .25em;

        a {
            color: #d7d7d7;
            font-weight: 500;
            font-size: 1.15em;
            padding: .5em 1em;
            text-decoration: none;
            &.nuxt-link-active {
                color: #41B883;
            }

            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
        }
    }
}
</style>
