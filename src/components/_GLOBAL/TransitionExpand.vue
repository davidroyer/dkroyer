<template>
  <transition
    :css="true"
    name="expand"
    @before-enter="beforeEnter"
    @enter="enter"
    @before-leave="beforeLeave"
    @leave="leave"
  >
    <slot></slot>
  </transition>
</template>

<script>
export default {
  props: ['duration'],
  methods: {
    beforeEnter: function(el) {
      console.log('rannnn!!!')
      el.style.height = '0'
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    leave: function(el) {
      el.style.height = '0'
    }
  }
}
</script>

<style lang="scss">
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
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
