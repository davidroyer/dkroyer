<template>
  <nav class="navbar has-shadow">
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

      <div class="navbar-burger burger" :class="{'is-active': menuIsActive}"@click="$store.commit('toggleMenuState')" data-target="navMenuExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <transition name="slide">
      <div id="navMenuExample" class="navbar-menu" :class="{'is-active': menuIsActive}">
        <div class="navbar-start">
          <template v-for="(link, key) in navLinks">
            <nuxt-link exact class="navbar-item" :to="link.href">{{link.title}}</nuxt-link>
          </template>
        </div>

        <div class="navbar-end">
          <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
            Github
          </a>
          <a class="navbar-item" href="https://twitter.com/jgthms" target="_blank">
            Twitter
          </a>
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a id="twitter"
                  class="button"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="http://bulma.io"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&url=http://bulma.io&via=jgthms">
                  <span class="icon">
                    <i class="fa fa-twitter"></i>
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p class="control">
                <a class="button is-primary" href="https://github.com/jgthms/bulma/archive/0.4.3.zip">
                  <span class="icon">
                    <i class="fa fa-download"></i>
                  </span>
                  <span>Download</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
