<template>
  <section class="hero is-primary is-bold is-small">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-2" v-text="title"></h1>
        <h1 class="subtitle is-4" v-if="subtitle" v-text="subtitle"></h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>

<style lang="scss">
</style>
