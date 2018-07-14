<template>
  <div class="accordion-list w-full max-w-md">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'VAccordionList',
  provide() {
    return {
      accordionListState: this.sharedState
    }
  },
  data: () => ({
    sharedState: {
      activeItem: null
    }
  })
}
</script>
