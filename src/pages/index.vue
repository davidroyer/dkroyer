<template>
<div class="home">
  <v-hero>
    <v-headline class="relative px-4 text-5xl md:text-6xl lg:text-7xl font-light text-center text-white" :tag="1">Front End Web Developer</v-headline>
  </v-hero>
  <v-wrapper>
    <v-intro :tag="2" text="About Me">
      I currently work at The Learning House in Lousville, KY as a member of the Web Team. While my official title is Front End Web Designer, the title of Front End Web Developer is far more accurate based on my active responsibilities.
    </v-intro>
    <section class="featured">
      <h2 class="">My Featured Projects</h2>
      <div class="repos">
        <div class="repo card has-shadow" v-for="item in popularRepos" :key="item.id">
          <h3 class="title is-5">{{item.name}}</h3>
          <p class="subtitle is-6 font-semibold text-lg">
            <v-icon name="star" font-size="18px"></v-icon> {{item.stargazers_count}}
          </p>
          <a :href="item.html_url" target="_blank">View Repo</a>
        </div>
      </div>
    </section>
    <section class="new-noteworthy">
      <h2 class="">My New & Noteworthy Project</h2>
      <div class="repo card has-shadow">
        <h3 class="title is-5">{{noteworthyRepo.name}}</h3>
        <p v-if="noteworthyRepo.stargazers_count > 0" class="subtitle is-6 font-semibold text-lg">
          <v-icon name="star" font-size="18px"></v-icon> {{noteworthyRepo.stargazers_count}}
        </p>
        <div v-html="noteworthyRepo.description"></div>
        <a :href="noteworthyRepo.html_url" target="_blank">View Repo</a>
      </div>
    </section>
  </v-wrapper>
</div>
</template>

<script>
const noteworthyRepoUrl = 'https://api.github.com/repos/davidroyer/nuxt2-ssr-firebase'
const popularReposUrl =
  'https://api.github.com/search/repositories?q=user:davidroyer&sort=stargazers_count&order=desc&per_page=6'

export default {
  head() {
    return {
      title: 'Home'
    }
  },
  data: () => ({
    popularRepos: [],
    noteworthyRepo: {}
  }),

  async mounted() {
    var apiRequest1 = fetch(noteworthyRepoUrl).then(response => {
      return response.json()
    })
    var apiRequest2 = fetch(popularReposUrl).then(response => {
      return response.json()
    })

    var combinedData = {
      apiRequest1: {},
      apiRequest2: {}
    }
    Promise.all([apiRequest1, apiRequest2])
      .then(values => {
        combinedData['apiRequest1'] = values[0]
        combinedData['apiRequest2'] = values[1]
        return combinedData
      })
      .then(combinedData => {
        this.noteworthyRepo = combinedData.apiRequest1
        this.popularRepos = combinedData.apiRequest2.items
      })
  }
}
</script>

<style lang="scss" scoped>
.home {
  .hero {
    background-attachment: fixed;
    background-image: url('~/assets/images/blog-me.jpeg');
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(
        to bottom right,
        rgba(32, 35, 58, 0.75),
        rgba(34, 41, 47, 0.75)
      );
      opacity: 0.7;
    }
  }
}
</style>
