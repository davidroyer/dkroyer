<template>
  <div class="hero is-primary is-bold">
    <div class="container">
      <h1 class="title" v-text="title"></h1>
      <h1 class="subtitle is-4" v-if="subtitle" v-text="subtitle"></h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'subtitle']
}
</script>

<style lang="scss">
// .title 
</style>
