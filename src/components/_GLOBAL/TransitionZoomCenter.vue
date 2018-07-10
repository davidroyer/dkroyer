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
      el.style.transform = 'scale3d(.3, .3, .3)'
      el.style.transition = 'transform .3s'
      el.style.opacity = 0.3
    },

    enter(el, done) {
      anime({
        targets: el,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        opacity: 1,
        duration: this.duration,
        easing: 'easeOutQuad',
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
        scaleX: 0,
        scaleY: 0,
        scaleZ: 0,
        opacity: 0,
        duration: this.duration,
        easing: 'easeInQuad',
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
