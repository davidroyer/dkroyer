<template>
  <section class="container blogPost">
      <hero :title="this.post.title" ></hero>
      <div class=" container content" v-html="this.post.body"></div>
      <social-sharing
        class="socialShare"
        :url="url"
        :title="this.post.title"
        description="Learn Nuxt.js Tips"
        twitter-user="davidroyer_"
        inline-template>

       <div>
         <span id="socialShareCTA">Share</span>
           <network network="email">
              <i class="fa fa-envelope"></i>
           </network>
           <network network="facebook">
             <i class="fa fa-facebook"></i>
           </network>
           <network network="twitter">
             <i class="fa fa-twitter"></i>
           </network>
       </div>
      </social-sharing>
  </section>
</template>

<script>
import Hero from '@/components/Hero'
import SocialSharing from '@/plugins/vue-social-sharing'

export default {
  head () {
    return {
      title: this.post.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.title
        }
      ]
    }
  },
  asyncData: async ({ app, params, payload, route }) => ({
    post: await app.$content('/blog').get(params.slug) || payload,
    url: `https://www.davidroyer.me${route.fullPath}`
  }),
  components: {
    Hero
  }
}
</script>

<style lang="scss">
.socialShare {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: white;
  padding: .5em;
  box-shadow: 0 2px 3px hsla(0, 0%, 4%, 0.55);
  padding: .5em 1em;
  border-radius: 40px;
  display: flex;
  align-items: center;

  span {
    margin: 0 .5em;
    cursor: pointer;
    transition: .2s ease;
    &:hover {
      color: #00d1b2;
    }
  }
  #socialShareCTA {
    cursor: auto;
    font-size: .9em;
    margin: 0 5px 0;

    &:hover {
      color: initial;
    }
  }
}
.siteContent {
  .content {
    padding: 3em .5em
  }
}

.blogPost {
  width: 100%;
  text-align: left;
  .hero > .container {
    max-width: 100%;
  }
  .title {
    text-align: center;
  }
  hr {
    margin: 2.5em 0;
  }

  .content {
    color: #4c4c4c;
    font-size: 1.05em;
    h1 {
      color: #4c4c4c;
    }
    .subtitle {
      font-weight: 100;
    }
  }
}
</style>
