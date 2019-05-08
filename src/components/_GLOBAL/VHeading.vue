<template>
  <component
    :is="'h' + tag"
    class="v-heading mb-4 leading-tight"
    :class="headingClasses"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: '3'
    },
    text: {
      type: String
    },
    headingClasses: {
      default: () => []
    }
  }
}
</script>
