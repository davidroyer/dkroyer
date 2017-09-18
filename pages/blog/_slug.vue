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
           <!-- <network network="email">
              <i class="fa fa-envelope"></i>
           </network>
           <network network="facebook">
             <i class="fa fa-facebook"></i>
           </network> -->
           <network network="twitter">
             <svg id="twitterShare" viewBox="0 0 128 128">
             <path  class="cls-1" d="M40.58,115.3c47.64,0,73.69-39.47,73.69-73.69,0-1.12,0-2.24-.07-3.35a52.7,52.7,0,0,0,12.92-13.41,51.7,51.7,0,0,1-14.87,4.08A26,26,0,0,0,123.63,14.6a51.9,51.9,0,0,1-16.45,6.29A25.92,25.92,0,0,0,63.05,44.51,73.53,73.53,0,0,1,9.67,17.45a25.92,25.92,0,0,0,8,34.58A25.71,25.71,0,0,1,6,48.78c0,.11,0,.22,0,.33A25.91,25.91,0,0,0,26.73,74.5a25.86,25.86,0,0,1-11.7.44,25.93,25.93,0,0,0,24.2,18A52,52,0,0,1,7.06,104a52.72,52.72,0,0,1-6.18-.36,73.32,73.32,0,0,0,39.7,11.63" transform="translate(-0.88 -12.7)"></path>
             </svg>
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
  z-index: 99999;
  // bottom: 30px;
  // right: 30px;
  background: white;
  box-shadow: 0 2px 3px 1px rgba(67, 67, 67, 0.78);
  // padding: .5em 1em;
  // border-radius: 40px;
  display: flex;
  align-items: center;
  right: 0;
  bottom: 0;
  border-radius: 0;
  border-left: 2px solid #4c4c4c;
  border-top: 2px solid #4c4c4c;
  // padding: .5em;
  border-top-left-radius: 5px;
  border-left: 2px solid #4c4c4c;
  border-top: 2px solid #4c4c4c;
  padding: .5em .75em;
  @media (min-width: 749px) {
      padding: .5em 1.25em;
  }

  svg {
    stroke-width: 20px;
    height: 25px;
    fill: #444;
    vertical-align: middle;
    // margin: 0 .5em;
    cursor: pointer;
    transition: .2s ease;
    &:hover {
      fill: #00d1b2;
    }
  }
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
    text-transform: uppercase;
    font-weight: 700;
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
