<template>
  <div class="container px-4 mx-auto max-w-xl">
    <h1 class="text-center">Tags Page</h1>
    <h2 class="text-center">
      <fa-icon icon="tag" style="font-size: 17px"></fa-icon>
      Tag: <span class="font-light" v-text="$route.params.tag"></span>
    </h2>
    <hr />
    <ul class="my-6 py-4 post-list flex flex-wrap justify-between">
      <li v-for="(post, index) in taggedPosts" :key="index" class="mx-4 my-4">
        <nuxt-link class="font-semibold" :to="post.permalink">{{
          post.title
        }}</nuxt-link>
        <div class="tags flex">
          <div
            v-for="(postTag, tagIndex) in post.tags"
            :key="tagIndex"
            class="tag text-sm mr-4"
          >
            <nuxt-link
              class="tag-link no-underline font-bold"
              :to="('/tags/' + postTag) | slugify"
            >
              <fa-icon icon="tag" style="font-size: 12px"></fa-icon>
              {{ postTag }}
            </nuxt-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
// import { slugFilter } from '@/utilities/filters.js'
import { getPostsFromTag } from '@/utilities/helpers.js'

export default {
  async asyncData({ $cmsApi, params }) {
    const allPosts = await $cmsApi.get('articles')
    // const tag
    return {
      taggedPosts: getPostsFromTag(allPosts, params.tag)
    }
  }
}
</script>
