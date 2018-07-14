<template>
  <div class="v-card-header">
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
  @apply font-semibold leading-tight text-2xl;

  > * {
    margin-top: 0 !important;
  }
}
</style>
