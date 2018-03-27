<template>

    <section v-if="!loading > 0" class="blogPost">
      <PostBanner :tags="post.tags" :title="post.title" :subtitle="post.subtitle"/>
      <article class="container content">
        <PostMarkdown :markdown="post.content"/>
      </article>

      <Share :title="post.title"/>
    </section>
</template>

<script>
  import post from '~/apollo/queries/post'
  import PostMarkdown from '@/components/PostMarkdown'
  import PostBanner from '@/components/PostBanner'
  import Share from '@/components/Share'

  export default {
    name: 'PostPage',

    async fetch ({ store, params, app, payload }) {
      let {data} = await app.apolloProvider.defaultClient.query(
        { query: post, prefetch: true, variables: {slug: params.slug} }
      )
      store.commit('setCurrentPost', data.post)
    },

    // async asyncData({params, payload, error, app}) {
    //   if (payload) return { post: payload }
    //   else {
    //     let {data} = await app.apolloProvider.defaultClient.query(
    //       { query: post, prefetch: true, variables: {slug: params.slug} }
    //     )
    //     return { post: data.post }
    //   }
    // },

    data: () => ({
      loading: 0
    }),

    apollo: {
      $loadingKey: 'loading',
    },

    head () {
      return {
        title: this.post.title,
        link: [
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-dark.min.css' }
        ],
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' }
        ]
      }
    },

    computed: {
      post() {
        return this.$store.getters.currentPost
      },
      authorAvatar() {
        let baseAssetUrl = 'https://media.graphcms.com'
        let handle = this.post.authors[0].avatar.handle
        let transformation = 'resize=w:150'
        return `${baseAssetUrl}/${transformation}/${handle}`
      }
    },

    components: { PostBanner, PostMarkdown, Share}
  }
</script>

<style src="@/assets/css/post.scss" lang="scss"></style>
<style scoped>
  .placeholder {
    height: 366px;
    background-color: #eee;
  }

  .article-header {
    text-align: center;
  }
</style>
