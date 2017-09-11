<template>
  <div class="home">
    <div class="hero">
        <div class="container">
          <h1 class="title">Front End Web Developer</h1>
        </div>
    </div>
    <section class="container content">
      <h2 class="about">About Me</h2>
      <p>I currently work at The Learning House. While my official title is Front End Web Designer, it would be more accurate as Front End Web Developer.</p>
      <strong>I spend most of my days doing…</strong>
      <ul>
        <li>Javascript heavy tasks</li>
        <li>The form system used with on our marketing sites for leadgen
      <ul>
        <li>Validation</li>
        <li>Lead capture</li>
        <li>User experience</li>
      </ul>
      </li>
        <li>A lot of accessibility recently</li>
      </ul>
      <strong>I spend most of my nights doing…</strong>
      <ul>
        <li>Firebase (All services/products including cloud functions),</li>
        <li>Vue.js</li>
        <li>Nuxt.js</li>
        <li>Node,</li>
        <li>Express.js</li>
      </ul>
    </section>
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
  .about {
    text-align: center;
    font-weight: 300;
    font-size: 2.5em;

    @media (min-width: 750px) {
      font-size: 3.5em;
    }
  }
  .container.content {
    text-align: left;
    max-width: 800px;
    font-weight: 500;
    // padding: 2em;
    margin-right: auto;
    margin-left: auto;
  }
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
    position: relative;
    background-attachment: fixed;
    height: 450px;

    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(to bottom right,#383838,#1a1e17);
      opacity: .7;
    }

    .container {
      padding: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .title {
    color: white;
    font-size: 3em;
    font-weight: 500;
    position: relative;
    text-align: left;


    text-align: center;
    max-width: 90%;
    margin: 0 auto;
    font-size: 3.5em;
    font-weight: 300;

    @media (min-width: 400px) {
      // max-width: 70%;
      font-size: 3.5em;
    }

    @media (min-width: 750px) {
      // max-width: 70%;
      font-size: 4.5em;
    }

    @media (min-width: 1400px) {
      font-size: 100px;
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
