<template>
<div class="home">
  <v-hero>
    <v-headline class="relative px-4 text-5xl md:text-6xl lg:text-7xl font-light text-center text-white" :tag="1">Front End Web Developer</v-headline>
  </v-hero>
  <v-wrapper>
    <section class="about mt-0 mb-8 border-b-2">
      <v-headline :tag="2" headlineClasses="mt-0 text-center text-indigo-darker text-5xl">About Me</v-headline>
      <p class="about-introtext">I currently work at The Learning House in Lousville, KY with the role of Marketing Operations Developer. The Learning House partners with companies, and instituions of higher learning for online education.</p>
      <p class="text-center"><strong class="list-header text-xl">Some recent projects and accomplishments consist of...</strong></p>
      <ul>
        <li>In change of handling all front-end aspects of building, testing, documenting, and integrating a new form system using Vue.js in prepartion of use for our 20+ marketing sites.</li>
        <li>Built a custom Vue.js Filtering Plugin so our site users can quickly and easily find the degree they are lookging for.</li>
        <li>Did a major overhaul to our wordpress theme that is used as a starting point for our marketing sites. The overhaul inlcuded switching from Gulp to using Webpack via Laravel Mix</li>
      </ul>
    </section>

    <section class="featured text-center my-8 border-b-2">
      <h2 class="font-semibold text-indigo-darker text-4xl pt-6 mb-0">My Featured Projects</h2>

      <div class="px-2">
        <div class="-mx-2 flex flex-wrap justify-around">
          <div class="card-wrapper card-wrapper-github flex px-2" v-for="item in popularRepos" :key="item.id">
            <v-card class="shadow-md w-full py-2">
              <div slot="header" class="-mt-4">
                <h3 class="leading-tight font-bold text-xl mt-2 mb-1">{{item.name}}</h3>
                <p class="subtitle mt-0 font-semibold text-lg">
                  <v-icon name="star" font-size="18px"></v-icon> {{item.stargazers_count}}
                </p>
              </div>
              <a slot="footer" class="mt-0 block" :href="item.html_url" target="_blank" rel="noopener noreferrer">View Repo</a>
            </v-card>
          </div>
        </div>
      </div>
    </section>

    <section class="new-noteworthy text-center my-8 border-b-2">
      <h2 class="font-semibold text-indigo-darker text-indigo-darker text-4xl pt-6 mb-0">My New & Noteworthy Project</h2>

      <div class="flex flex-wrap justify-center">
        <div class="card-wrapper card-wrapper-github">
          <v-card class="shadow-md w-full py-2">
            <div slot="header" class="-mt-4">
              <h3 class="leading-tight font-bold text-xl mt-2 mb-1">{{noteworthyRepo.name}}</h3>
              <p class="subtitle mt-0 font-semibold text-lg">
                <v-icon name="star" font-size="18px"></v-icon> {{noteworthyRepo.stargazers_count}}
              </p>
            </div>
            <a slot="footer" class="mt-0 block" :href="noteworthyRepo.html_url" target="_blank" rel="noopener noreferrer">View Repo</a>
          </v-card>
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

      &-introtext {
        margin-top: -1.25rem;
      }
      .list-header {
        text-transform: capitalize;
        margin-top: 2rem;
        display: block;
        margin-bottom: -0.5rem;
        font-weight: 600;
      }

      ul {
        padding-left: 30px !important;
      }
      li {
        list-style: disc;
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
