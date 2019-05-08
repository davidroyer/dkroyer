<template>
  <div class="site-info">
    <v-hero class="page-heading">
      <v-headline
        class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white"
        :tag="1"
      >
        Site Info - Technical Information
      </v-headline>
    </v-hero>

    <v-wrapper>
      <img
        class="headshot"
        src="@/assets/images/headshot.jpg"
        alt="David Royer Headshot"
      />
      <p>
        This site is built with
        <a href="https://nuxtjs.org/" rel="noopener" target="_blank">Nuxt.js</a>
        and
        <a href="https://vuejs.org/" rel="noopener" target="_blank">Vue.js</a>.
        Nuxt.js at its core is a framework for building Universal Vue.js aspps
        but can also be used to create static sites which is how I am using it
        for this site.
      </p>
      <p>
        The site is hosted on <a href="https://www.netlify.com/">Netlify</a>.
        They offer amazing services and constantly add new features and
        benefits.
      </p>
      <p>
        In addition to being a static site, this site is a PWA (Progressive Web
        App) as well.
      </p>
      <p>
        I've spent a considerable amount of time working to improve performance
        for this site. One of the more helpful tools in this process has been
        Google's
        <a
          href="https://developers.google.com/web/tools/lighthouse"
          rel="noopener"
          target="_blank"
          >Lighthouse</a
        >
        tool. They offer a Chome Extension, making it simple to use and
        beneficial for helping developers create better sites.
      </p>
      <!-- <caption>The Lighthouse scores for this site</caption> -->

      <figure>
        <figcaption>The Lighthouse scores for this site</figcaption>
        <img
          src="@/assets/images/davidroyer-lighthouse-top.png"
          alt="Lighthouse Scores for https://www.davidroyer.me"
        />
      </figure>
    </v-wrapper>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Site Info'
  }
}
</script>

<style lang="scss" scoped>
figcaption {
  display: block;
  font-weight: 600;
  margin-top: 2em;
}

.headshot {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.45);
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 2.5em;
  width: 200px;
  max-width: 100%;
  border-radius: 20%;
}

.title {
  text-align: center;
}
</style>
