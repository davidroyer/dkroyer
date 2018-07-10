<template>
  <div class="gallery" :style="styleObject">
    <slot/>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: [Array, Number],
      default: () => []
    },
    minColW: {
      type: String,
      default: '200px'
    },
    maxColW: {
      type: String,
      default: '1fr'
    }
  },
  computed: {
    styleObject() {
      return {
        gridTemplateColumns: `repeat(auto-fill, minmax(${this.minColW}, ${this.maxColW}))`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.gallery {
  /* Grid Fallback */
  display: flex;
  flex-wrap: wrap;

  /* Supports Grid */
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-auto-rows: minmax(150px, auto);
  grid-gap: 1em;
}
</style>
