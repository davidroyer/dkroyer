<template>
<div class="home">
  <v-hero>
    <v-headline class="relative px-4 text-5xl md:text-6xl lg:text-7xl font-light text-center text-white" :tag="1">Front End Web Developer</v-headline>
  </v-hero>
  <v-wrapper>
    <section class="about mt-0 mb-8 border-b-2">
      <v-headline :tag="2" headlineClasses="mt-0 text-center text-4xl">About Me</v-headline>
      <p>I currently work at The Learning House in Lousville, KY with the role of Marketing Operations Developer. The Learning House partners with companies, and instituions of higher learning for online education.</p>
      <!-- <p>If you wondering what exactly this developer role consists of because you've never heard of it, that would be expected because it's not one commonly used. Nevertheless, my responsbilities consist of handling anything that code intensive.</p> -->
      <p class="text-center"><strong class="list-header text-xl">Some recent projects and accomplishments consist of...</strong></p>
      <ul>
        <li>In change of handling all front-end aspects of building, testing, documenting, and integrating a new form system using Vue.js in prepartion of use for our 20+ marketing sites.</li>
        <li>Built a custom Vue.js Filtering Plugin so our site users can quickly and easily find the degree they are lookging for.</li>
        <li>Did a major overhaul to our wordpress theme that is used as a starting point for our marketing sites. The overhaul inlcuded switching from Gulp to using Webpack via Laravel Mix</li>
      </ul>
    </section>
    <section class="featured text-center my-8 border-b-2">
      <h2 class="text-4xl pt-6 mb-0">My Featured Projects</h2>
      <div class="repos sm:flex flex-wrap justify-around">
        <div class="repo border-2 border-grey-light card has-shadow pt-4 pb-6" v-for="item in popularRepos" :key="item.id">
          <h3 class="mt-2 pb-1 mb-0">{{item.name}}</h3>
          <p class="subtitle mt-0 is-6 font-semibold text-lg">
            <v-icon name="star" font-size="18px"></v-icon> {{item.stargazers_count}}
          </p>
          <a class="mt-6 pt-4 block" :href="item.html_url" target="_blank">View Repo</a>
        </div>
      </div>
    </section>
    <section class="new-noteworthy text-center my-8 border-b-2">
      <h2 class="text-4xl pt-6 mb-0">My New & Noteworthy Project</h2>
      <div class="repos sm:flex flex-wrap justify-around">
        <div class="repo border-2 border-grey-light card has-shadow pt-4 pb-6">
          <h3 class="mt-2 pb-1 mb-0">{{noteworthyRepo.name}}</h3>
          <p v-if="noteworthyRepo.stargazers_count > 0" class="subtitle mt-0 is-6 font-semibold text-lg">
            <v-icon name="star" font-size="18px"></v-icon> {{noteworthyRepo.stargazers_count}}
          </p>
          <!-- <div v-html="noteworthyRepo.description"></div> -->
          <a class="mt-6 pt-4 block" :href="noteworthyRepo.html_url" target="_blank">View Repo</a>
        </div>
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
  section {
    padding: 1em 0 3.5em;

    &.about {
      padding: 1em 0.5em 3.5em;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
      .list-header {
        text-transform: capitalize;
        margin-top: 2rem;
        display: block;
        margin-bottom: -0.5rem;
        font-weight: 600;
      }
      p {
        margin-bottom: 1rem;
      }
    }
  }

  .repo {
    flex: 0 1 250px;
    margin: 2em 1em !important;
    position: relative;
  }
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
