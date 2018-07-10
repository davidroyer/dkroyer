<template>
  <div class="accordion-list w-full max-w-md">
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      accordionListState: this.sharedState
    }
  },
  data() {
    return {
      sharedState: {
        activeItem: null
      }
    }
  }
}
</script>
