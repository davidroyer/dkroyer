<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
    :css="false"
  >
    <slot></slot>
  </transition>
</template>

<script>
import anime from 'animejs'

export default {
  props: ['duration'],
  methods: {
    beforeEnter: function(el) {
      el.style.transform = 'translateY(100%)'
    },
    enter: function(el, done) {
      anime({
        targets: el,
        translateY: 0,
        duration: this.duration,
        easing: 'easeOutQuad',
        complete: done
      })
    },
    leave: function(el, done) {
      anime({
        targets: el,
        translateY: '100%',
        duration: this.duration,
        easing: 'easeInQuad',
        complete: done
      })
    }
  }
}
</script>
