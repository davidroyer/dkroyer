<template>
  <div class="v-card-header font-semibold leading-tight text-2xl">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'VCardHeader',
  props: {
    heading: {
      type: String
    },
    headingTag: {
      type: String,
      default: '3'
    }
  }
}
</script>

<style lang="scss">
.v-card-header {
  padding-top: 0.5rem;

  > * {
    margin-top: 0 !important;
  }
}
</style>
