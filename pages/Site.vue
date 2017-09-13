<template>
<div class="about">
  <div class="hero is-primary is-bold is-small">
    <div class="container">
      <h1 class="title">Site Info - Technical Information</h1>
    </div>
  </div>
  <div class="container content">

    <img class="headshot" src="~static/images/headshot.jpg" alt="">
    <p>This site is built with Nuxt.js. At its core, Nuxt is a framework for creating Universal Apps (Apps that can run the same code on client and server). It can also be used as a static site generator which is how I as using it.
    </p>
    <p>In addition to being a static site, my site is actually a PWA (Progress Web App), as well.</p>

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
