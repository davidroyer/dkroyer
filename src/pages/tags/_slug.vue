<template>
  <div class="container px-4 mx-auto max-w-xl">
    <h1 class="text-center">Tags Page</h1>
    <h2 class="text-center">
      <fa-icon icon="tag" style="font-size: 17px"></fa-icon>Tag:
      <span class="font-light" v-text="$route.params.tag"></span>
    </h2>
    <!-- <pre>{{posts}}</pre> -->
    <hr />
    <ul class="my-6 py-4 post-list flex flex-wrap justify-between">
      <li v-for="(post, index) in posts" :key="index" class="mx-4 my-4">
        <nuxt-link class="font-semibold" :to="`/blog/${post.slug}`">
          {{ post.title }}
        </nuxt-link>
        <div class="tags flex">
          <div
            v-for="(postTag, tagKey) in post.tags"
            :key="tagKey"
            class="tag text-sm mr-4"
          >
            <nuxt-link
              class="tag-link no-underline font-bold"
              :to="`/tags/${postTag.slug}`"
            >
              <fa-icon icon="tag" style="font-size: 12px"></fa-icon>
              {{ postTag.title }}
            </nuxt-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!-- <div>
    <h1 v-text="tag.title" />
    <pre>{{ tag }}</pre>
  </div>-->
</template>

<script>
export default {
  asyncData({ $cmsApi, params }) {
    const tag = $cmsApi.get('articles/tags', params.slug)
    const posts = tag.posts
    return { tag, posts }
  },

  head() {
    return {
      title: this.tag.title
    }
  }
}
</script>

<style>
img {
  max-width: 800px;
}
</style>
