<template>
  <div class="about">
    <div class="hero">
        <div class="container">
          <h1 class="title">Front End Web Developer</h1>
        </div>
    </div>
    <section class="container content">
      <h1 class="title">
        About Me
      </h1>
      <img class="headshot" src="~/assets/images/headshot.jpg" alt="David Royer Headshot">
      <p>I love learning new things, growing as a person, and being creative.</p>
      <p>As a math major, I always loved problem solving, and now enjoy the opprotunity to apply this characteristic to Web Design & Development. It’s an extraordinary feeling to push through the many iterations of creation to finally realize “That is it…that’s what I want."</p>
    </section>
  </div>
</template>

<script>
import allPosts from '~/apollo/queries/allPosts'

export default {
  head: {
    title: 'About Me'
  },
  async asyncData({params, payload, error, app}) {

    if (payload) return { allPosts: payload }
    else {
      let {data} = await app.apolloProvider.defaultClient.query(
        { query: allPosts, prefetch: true }
      )
      return { posts: data.allPosts }
    }
  },
  data: () => ({
    loading: 0
  }),
  apollo: {
    $loadingKey: 'loading'
  }
}
</script>

<style lang="scss">
.headshot {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.45);
}
</style>
