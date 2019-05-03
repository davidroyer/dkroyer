<template>
  <div class="blog">
    <v-hero class="page-heading">
      <v-headline
        class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white"
        :tag="1"
      >
        My Noteworthy Projects
      </v-headline>
    </v-hero>
    <v-wrapper>
      <ul class="my-6 py-4 post-list flex flex-wrap justify-between">
        <li v-for="(project, index) in projects" :key="index" class="mx-4 my-4">
          <nuxt-link class="font-semibold" :to="project.permalink">{{
            project.title
          }}</nuxt-link>
        </li>
      </ul>
    </v-wrapper>
  </div>
</template>

<script>
export default {
  async asyncData({ app, route }) {
    const projects = await app.$content('/projects').getAll()
    return {
      projects
    }
  }
}
</script>
