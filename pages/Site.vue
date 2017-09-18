<template>
<div class="about">
  <div class="hero is-primary is-bold is-small">
    <div class="container">
      <h1 class="title">Site Info - Technical Information</h1>
    </div>
  </div>
  <div class="container content">

    <img class="headshot" src="~/assets/images/headshot.jpg" alt="David Royer Headshot">
    <p>This site is built with <a href="https://nuxtjs.org/" rel="noopener" target="_blank">Nuxt.js</a> and <a href="https://vuejs.org/" rel="noopener" target="_blank">Vue.js</a>. While at its core, Nuxt is a framework for creating Universal Apps, it can also be used as to create static sites which is how I as using it for this site.
    </p>
    <p>The site is hosted on <a href="https://www.netlify.com/">Netlify</a>. They offer amazing services and are constantly adding new benifits and features.</p>
    <p>In addition to being a static site, my site is actually a PWA (Progress Web App), as well.</p>
    <p>I've spent a coniderable amount of time recently working to understand improved performance and use <a href="https://developers.google.com/web/tools/lighthouse" rel="noopener" target="_blank">Lighthouse</a>, by Google as one of my tools to accmplish this.</p>
    <!-- <caption>The Lighthouse scores for this site</caption> -->

    <figure>
      <figcaption>The Lighthouse scores for this site</figcaption>
      <img src="~/assets/images/davidroyer-lighthouse-top.png" alt="Lighthouse Scores for https://www.davidroyer.me">
    </figure>

  </div>
</div>
</template>

<script>

export default {
  head: {
    title: 'Site Info'
  }
}
</script>

<style lang="scss">
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
  margin-bottom: 1.5em;
}

.title {
  text-align: center;
}
</style>
