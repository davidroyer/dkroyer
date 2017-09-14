<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
      <!--  NOTE Add Image Version Here -->
      <h1 class="logo"><span>David</span><span>Royer</span></h1>
      </a>

      <div class="nav-right">
        <a class="nav-item is-hidden-mobile is-hidden-desktop" href="https://github.com/davidroyer" rel="noopener" target="_blank">
          <icon name="github" scale="1.5"></icon>
        </a>
        <a class="nav-item is-hidden-mobile is-hidden-desktop" href="https://twitter.com/DavidRoyer_" rel="noopener" target="_blank">
          <icon name="twitter" scale="1.5"></icon>
        </a>
        <a class="nav-item is-hidden-mobile is-hidden-desktop" href="https://www.linkedin.com/in/dkroyer/" rel="noopener" target="_blank">
          <icon name="linkedin-square" scale="1.5"></icon>
        </a>
      </div>

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
          <a class="navbar-item" href="https://github.com/davidroyer" rel="noopener" target="_blank">
            Github
          </a>
          <a class="navbar-item" href="https://twitter.com/davidroyer_" rel="noopener" target="_blank">
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
                  rel="noopener" target="_blank"
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

.nav-item {
  padding: .5rem .6rem;
}
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

.navbar-burger span {
  width: 25px !important;
  height: 1.5px !important;
  &:first-child {
    margin-top: -10px !important;
  }
  &:nth-child(3) {
    margin-top: 7px !important;
  }
}
// twitter
// style="color: #55acee;"
</style>
