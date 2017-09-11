<template>
  <div class="container" >
    <section class="hero is-primary is-bold is-small">
      <div class="hero-body">
        <div class="has-text-centered">
          <h1 class="title is-2" v-text="$metaInfo.title"></h1>
        </div>
      </div>
    </section>
      <div class="message">
        <h2 class="subtitle is-3">Coming Soon...</h2>
      </div>
      <div class="postsNavigation">
        <template v-for="post in posts">
          <nuxt-link class="postLink card has-shadow" :key="post.slug" :to="'/posts/'+post.slug">
            <span class="title" v-text="post.title"></span>
            <div class="postPreview" v-html="post.preview"></div>
          </nuxt-link>
        </template>
      </div>
  </div>
</template>

<script>
// import axios from 'axios'
import Logo from '~components/Logo.vue'
import axios from '~plugins/axios'
import Hero from '~components/Hero.vue'

export default {
  components: {
    Hero
  },
  head () {
    return {
      title: 'Blog Posts'
    }
  },
  async asyncData({params}) {
    const PostsObject = await import(`~/static/api/posts.json`)

    return {
      posts: PostsObject
    }
  },
  // async asyncData({params}) {
  //   let slug = params.slug
  //   const {data} = await axios.get(`/api/posts.json`)
  //
  //   return {
  //     posts: data
  //   }
  // },
  components: {
    Logo
  },
  data() {
    return {
      user: null
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
  padding: 4em;
    background: none;
}
.has-text-centered {
  padding: 2em 0;
}
.postsNavigation {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

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
    border: none;
    transition: .3s ease;

    &:hover {
    box-shadow: 0 2px 5px 0 rgba(40, 31, 31, 0.2), 0 2px 10px 0 rgba(101, 101, 101, 0.12);
    transform: scale(1.05);
      .title {
        // font-size: 2.15em;
        // font-weight: 400;
        // text-decoration: underline;
      }
    }

    @media (min-width: 500px) {
      flex: 1 1 200px;
      max-width: 300px;
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
