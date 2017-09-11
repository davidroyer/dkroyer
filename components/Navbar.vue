<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
      <!--  NOTE Add Image Version Here -->
      <h1 class="logo"><span>David</span><span>Royer</span></h1>
      </a>

      <a class="navbar-item is-hidden-desktop" href="https://github.com/davidroyer" target="_blank">
        <span class="icon" style="color: #333;">
          <i class="fa fa-github"></i>
        </span>
      </a>

      <a class="navbar-item is-hidden-desktop" href="https://twitter.com/DavidRoyer_" target="_blank">
        <span class="icon" style="color: #55acee;">
          <i class="fa fa-twitter"></i>
        </span>
      </a>

      <div class="navbar-burger burger" :class="{'is-active': menuIsActive}" @click="$store.commit('toggleMenuState')" data-target="navMenuExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>


    <!-- <transition name="slide"> -->
      <div id="navMenuExample" class="navbar-menu is-active" :class="{'menuIsActive': menuIsActive}">
        <div class="navbar-start">
          <template v-for="(link, key) in navLinks">
            <nuxt-link exact class="navbar-item" :to="link.href">{{link.title}}</nuxt-link>
          </template>
        </div>

        <div class="navbar-end is-hidden-touch">
          <a class="navbar-item" href="https://github.com/davidroyer" target="_blank">
            Github
          </a>
          <a class="navbar-item" href="https://twitter.com/davidroyer_" target="_blank">
            Twitter
          </a>
          <!-- <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a id="twitter"
                  class="button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="https://www.davidroyer.me"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=DavidRoyer: Front End Web Developer&url=http://davidroyer.me&via=davidroyer_">
                  <span class="icon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
            </div>
          </div> -->
        </div>
      </div>
    <!-- </transition> -->
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['navLinks'],
  computed: mapState([
    'menuIsActive'
  ])
}
</script>

<style lang="scss">

.navbar-brand {
  position: relative;
  z-index: 999999;
  background: white;
}

@media (max-width: 999px) {
  .navbar-menu {
    position: absolute;
    top: 54px;
    background: rgb(190, 190, 190);
    box-sizing: border-box;
    left: 0;
    right: 0;
    transition: all .35s ease-in-out;
    transform: translateY(-100%);
    background: white;
    z-index: 9;
    text-align: left;
    &.menuIsActive {
      transform: translateY(0%);
    }
  }
}

.slide-enter-active, .slide-leave-active {
  // transition: opacity 1.5s;
  transition: all .4s ease-in-out;
}
.slide-enter, .slide-leave-to /* .fade-leave-active in <2.1.8 */ {
  // opacity: 0;
  transform: translateY(-100%);
  transition: all .4s ease-in-out;
}
.logo {
  font-size: 1.5em;
  color: #555;

  @media (min-width: 1000px) {
    font-size: 2em;
  }
  span:first-of-type {
    margin-right: 3px;
    font-weight: 700;
  }
}

.has-shadow {
  box-shadow: 0 2px 3px hsla(0,0%,4%,.1);
}
</style>
