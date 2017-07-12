<template>
  <div class="home">
    <div class="hero">
        <h1 class="title">Welcome</h1>
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
  // layout: 'home',
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
.home {
  .hero {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    background: url('~assets/images/blog-me.jpeg');
    height: 600px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .title {
    color: white;
    font-size: 10vw;
    margin-left: .25em;
    margin-top: -2em;
    font-weight: 500;

    @media (min-width: 1400px) {
      font-size: 140px;
    }
    /*
    margin-left: 48px;*/
  }

}
.postsNavigation {
  a {
    margin: 1em;
  }
}
</style>
