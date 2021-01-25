<template>
  <div class="home">
    <!-- <pre>{{ articles }}</pre> -->
    <v-hero>
      <v-headline
        class="relative px-4 text-5xl font-light text-center text-white md:text-6xl lg:px-8 lg:text-7xl"
        :tag="1"
      >
        Full Stack Developer
      </v-headline>
    </v-hero>
    <v-wrapper>
      <section class="mt-0 mb-8 border-b-2 about">
        <v-headline
          :tag="2"
          headline-classes="mt-0 text-center text-indigo-darker text-5xl"
        >
          About Me
        </v-headline>
        <no-ssr>
          <codersrank-summary branding="false" username="davidroyer" />
        </no-ssr>

        <p class="text-center">
          <strong class="text-xl list-header"
            >Recent projects and accomplishments</strong
          >
        </p>
        <ul>
          <li>
            In charge of handling all front-end aspects of building, testing,
            documenting, and integrating a new form system using Vue.js in
            preparation of use for our 20+ marketing sites.
          </li>
          <li>
            Built a custom Vue.js filtering plugin allowing users on our
            clients' sites to quickly and easily find the degree they are
            looking for.
          </li>
          <li>
            Initiated and led a major overhaul to our WordPress theme that is
            used as a starting point for our marketing sites. The overhaul
            inlcuded switching from Gulp to using Webpack via Laravel Mix.
          </li>
        </ul>
      </section>

      <section class="my-8 text-center border-b-2 featured">
        <h2 class="pt-6 mb-0 text-4xl font-medium text-indigo-darker">
          My Featured Projects
        </h2>
        <v-gallery min-col-w="300px">
          <v-gallery-item v-for="(item, index) in popularRepos" :key="index">
            <v-card class="w-full py-2">
              <v-card-header>
                <v-heading class="text-xl" v-text="item.name" />
              </v-card-header>
              <v-card-body>
                <p class="mt-0 text-lg font-semibold subtitle">
                  <fa-icon icon="star" style="font-size: 17px"></fa-icon>
                  {{ item.stargazers_count }}
                </p>
              </v-card-body>
              <a
                slot="footer"
                class="block mt-0"
                :href="item.html_url"
                target="_blank"
                rel="noopener noreferrer"
                >View Repo</a
              >
            </v-card>
          </v-gallery-item>
        </v-gallery>
      </section>

      <section class="my-8 text-center border-b-2 new-noteworthy">
        <h2 class="pt-6 mb-0 text-4xl font-medium text-indigo-darker">
          My New & Noteworthy Project
        </h2>
        <div class="grid">
          <v-card class="py-2 mx-auto">
            <v-card-header>
              <v-heading class="text-xl" v-text="noteworthyRepo.name" />
            </v-card-header>
            <v-card-body>
              <p class="mt-0 text-lg font-semibold subtitle">
                <fa-icon icon="star" style="font-size: 17px"></fa-icon>
                {{ noteworthyRepo.stargazers_count }}
              </p>
            </v-card-body>
            <a
              slot="footer"
              class="block mt-0"
              :href="noteworthyRepo.html_url"
              target="_blank"
              rel="noopener noreferrer"
              >View Repo</a
            >
          </v-card>
        </div>
      </section>
    </v-wrapper>
  </div>
</template>

<script>
const noteworthyRepoUrl =
  'https://api.github.com/repos/davidroyer/nuxt2-ssr-firebase'
const popularReposUrl =
  'https://api.github.com/search/repositories?q=user:davidroyer&sort=stargazers_count&order=desc&per_page=6'

export default {
  head() {
    return {
      title: 'Home',

      script: [
        {
          src: 'https://unpkg.com/@webcomponents/webcomponentsjs@%5E2/'
        },
        {
          src:
            'https://unpkg.com/@codersrank/summary@0.9.11/codersrank-summary.min.js'
        }
      ]
    }
  },

  data: () => ({
    popularRepos: [],
    noteworthyRepo: {}
  }),
  // asyncData({ $cmsApi }) {
  // const articles = $cmsApi.get('blog')
  // return { articles }
  // },

  mounted() {
    const apiRequest1 = fetch(noteworthyRepoUrl).then(response => {
      return response.json()
    })
    const apiRequest2 = fetch(popularReposUrl).then(response => {
      return response.json()
    })

    const combinedData = {
      apiRequest1: {},
      apiRequest2: {}
    }
    Promise.all([apiRequest1, apiRequest2])
      .then(values => {
        combinedData.apiRequest1 = values[0]
        combinedData.apiRequest2 = values[1]
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
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
  }
  .featured {
    .grid {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1.5rem;

      @media screen and (min-width: 560px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media screen and (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }

  section {
    padding: 1em 0 3.5em;

    &.about {
      padding: 1em 0.5em 3.5em;
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;

      &-introtext {
        margin-top: -1.25rem;
        line-height: 2;
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
        max-width: 700px;
        margin-left: auto;
        margin-right: auto;
        line-height: 1.7;
      }

      p {
        margin-bottom: 1rem;
      }
    }
  }

  /* .repo { */
  /* flex: 0 1 250px; */
  /* margin: 2em 1em !important; */
  /* position: relative; */
  /* } */
  .hero {
    background-attachment: fixed;
    background-image: url('~assets/images/blog-me.jpeg');
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

    .headline {
      line-height: 0.975;
      font-size: 3.5rem;
      font-weight: 300;

      @screen md {
        font-size: 4.5rem;
      }

      @screen lg {
        font-size: 5.5rem;
      }
    }
  }
}
</style>
