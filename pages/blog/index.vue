<template>
  <div class="blog">
    <div class="hero is-primary is-bold is-small">
      <div class="container">
        <h1 class="title" v-text="$metaInfo.title"></h1>
      </div>
    </div>
      <section class="container">
        <div class="postsNavigation">
          <template v-for="post in posts">
            <nuxt-link class="postLink card has-shadow" tag="li" :key="post.permalink" :to="'/blog'+post.permalink">
              <a class="title" v-text="post.title"></a>
              <span class="postLink__date">{{post.date}}</span>
              <!-- <div></div> -->
            </nuxt-link>
          </template>
        </div>
      </section>
  </div>
</template>

<script>

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
    // text-align: left;
    min-width: 100px;
    max-width: 100%;;
    display: flex;
    flex-flow: row wrap;
    // background: rgba(216, 216, 216, 0.24);
    // box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23) !important;
    border: none;
    transition: .3s ease;

    background: none;
    box-shadow: none !important;
    margin: 0 auto;
    text-align: center;

    .title {
      font-size: 1.6rem;
      margin-bottom: 0;
      align-self: center;
    }
    &__date {
      margin-left: auto;
      margin-right: auto;
      display: block;
      font-weight: 100;
      font-style: italic;
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
      // align-self: flex-start;
      transition: .3s ease;

      &:hover {
        color: #00ad81;
      }
    }

    .postPreview {
      align-self: center;
    }
  }
}
</style>
