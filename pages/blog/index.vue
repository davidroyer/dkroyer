<template>
  <div class="blog">
    <div class="hero is-primary is-bold is-small">
      <div class="container">
        <h1 class="title" v-text="$metaInfo.title"></h1>
      </div>
    </div>
      <section class="container">
        <div class="message">
          <h2 class="subtitle is-3">Coming Soon...</h2>
        </div>
        <div class="postsNavigation">
          <template v-for="post in posts">
            <nuxt-link class="postLink card has-shadow" :key="post.permalink" :to="'/blog'+post.permalink">
              <span class="title" v-text="post.title"></span>
            </nuxt-link>
          </template>
        </div>
      </section>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  components: {
  },
  head () {
    return {
      title: 'Blog Posts'
    }
  },
  async asyncData ({ app }) {
    return {
      posts: await app.$content('/blog').getAll()
    }
  },
  data() {
    return {
    }
  },
  created () {

  },
  methods: {
  }
}
</script>

<style lang="scss">
.message {
  padding: 2em 0em;
  background: none;

  @media (min-width: 750px) {
    padding: 4em;
  }
}
.has-text-centered {
  padding: 2em 0;
}
.postsNavigation {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  .postLink {
    margin: 1em;
    padding: 1em;
    flex: 1 1 100%;
    height: 180px;
    text-align: left;
    min-width: 100px;
    max-width: 100%;;
    display: flex;
    flex-flow: row wrap;
    background: rgba(216, 216, 216, 0.24);
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) !important;
    border: none;
    transition: .3s ease;
    .title {
      font-size: 1.6rem;
    }
    &:hover {
    // box-shadow: 0 2px 5px 0 rgba(40, 31, 31, 0.2), 0 2px 10px 0 rgba(101, 101, 101, 0.12);
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    transform: scale(1.05);
      .title {
        // font-size: 2.15em;
        // font-weight: 400;
        // text-decoration: underline;
      }
    }

    @media (min-width: 500px) {
      flex: 1 1 240px;
      max-width: 450px;
    }

    .title {
      flex-basis: 100%;
      align-self: flex-start;
      transition: .3s ease;
    }

    .postPreview {
      align-self: center;
    }
  }
}
</style>
