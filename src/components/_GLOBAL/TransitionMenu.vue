<template>
  <transition
    :css="false"
    @enter="enter"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"
    @leave="leave"
    @before-leave="beforeLeave"
    @after-leave="afterLeave"
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
      el.style.opacity = 0.3
      el.style.transform = 'scale(0)'
      el.style.width = '0px'
      el.style.height = '0px'
    },
    enter: function(el, done) {
      anime({
        targets: el,
        scale: 1,
        opacity: 1,
        height: '100%',
        width: '100%',
        top: 0,
        right: 0,
        duration: this.duration,
        easing: 'easeOutQuad',
        complete: done
      })
    },
    afterEnter() {
      const body = document.getElementsByTagName('body')[0]
      body.classList.add('has-overlay')
    },

    beforeLeave() {},

    leave: function(el, done) {
      anime({
        targets: el,
        scale: 0,
        opacity: 0,
        height: 0,
        width: 0,
        duration: this.duration,
        easing: 'easeInQuad',
        complete: done
      })
    },

    afterLeave() {
      const body = document.getElementsByTagName('body')[0]
      body.classList.remove('has-overlay')
    }
  }
}
</script>
