<template>
  <div class="gallery-item">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'VGalleryItem',
  props: {
    items: {
      type: [Array, Number],
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  &-item {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    min-height: 200px;

    /* Flex Fallback */
    margin-left: 5px;
    margin-right: 5px;
    flex: 1 1 200px;

    @supports (display: grid) {
      margin: 0;
    }
  }
}
</style>
