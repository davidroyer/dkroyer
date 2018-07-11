<template>
  <transition
    @enter="enter"
    @before-enter="beforeEnter"
    @after-enter="afterEnter"

    @leave="leave"
    @before-leave="beforeLeave"
    @after-leave="afterLeave"
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
    beforeEnter(el) {
      el.style.transform = 'translateX(100%)'
    },

    enter(el, done) {
      anime({
        targets: el,
        translateX: 0,
        duration: this.duration,
        easing: 'easeOutCubic',
        complete: () => {
          done()
        }
      })
    },

    afterEnter() {
      let body = document.getElementsByTagName('body')[0]
      body.classList.add('has-overlay')
    },

    beforeLeave() {},

    leave(el, done) {
      anime({
        targets: el,
        translateX: '100%',
        duration: this.duration,
        easing: 'easeInCubic',
        complete: done
      })
    },

    afterLeave() {
      let body = document.getElementsByTagName('body')[0]
      body.classList.remove('has-overlay')
    }
  }
}
</script>
