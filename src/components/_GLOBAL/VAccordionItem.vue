<template>
  <div class="accordion-item">
    <div @click="toggle" role="button" class="accordion-item-header hover:bg-grey-light">
      <slot name="header"></slot>
      <svg class="icon" :class="{ 'rotate-90': active }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
    </div>
    <transition-expand>
      <div class="accordion-item-content-wrapper" v-show="active">
        <div class="accordion-item-content">
          <slot name="content"/>
        </div>
      </div>
    </transition-expand>
  </div>
</template>

<script>
export default {
  inject: ['accordionListState'],
  props: ['itemId'],
  computed: {
    active() {
      return this.accordionListState.activeItem === this.itemId
    }
  },
  methods: {
    toggle() {
      this.accordionListState.activeItem = this.active ? null : this.itemId
    }
  }
}
</script>

<style lang="scss">
.accordion-item {
  &-header {
    transition: background-color 0.25s ease;
    .icon {
      width: 30px;
      height: 30px;
      transition: all 0.3s ease;

      &.rotate-90 {
        transform: rotate(90deg);
      }
    }
  }
}
</style>

<style scoped>
* {
  will-change: height;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}
</style>
