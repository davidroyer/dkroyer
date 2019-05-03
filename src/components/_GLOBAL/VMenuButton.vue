<template>
  <button
    class="v-menu-button"
    :class="{ 'v-menu-button--checked': menuIsActive }"
    v-on="$listeners"
  >
    <span><slot>Menu</slot></span>
  </button>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    menuIsActive() {
      return this.checked
    }
  }
}
</script>

<style lang="scss">
/* @import "_variables.css"; */
$menu-button-color: #666;
.v-menu-button {
  position: relative;
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  width: 2rem;
  height: 1.75rem;
  line-height: 1;
  -webkit-tap-highlight-color: transparent;
  z-index: 99999;

  // &[aria-expanded='true'] {
  //   background: white;
  // }
}
.v-menu-button > span,
.v-menu-button:after,
.v-menu-button:before {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  padding: 0;
  margin: 0;
  background: $menu-button-color;
  transition: all 0.25s;
  transition-delay: 250ms;
}
.v-menu-button:after,
.v-menu-button:before {
  top: 50%;
  content: '';
  pointer-events: none;
  // transition: all 0.25s;
  // transition-delay: 500ms;
  transform-origin: 50% 50%;
}
.v-menu-button:before {
  transform: translate3d(0, -10px, 0);
}
.v-menu-button:after {
  transform: translate3d(0, 10px, 0);
}
.v-menu-button > span {
  overflow: hidden;
  text-indent: 200%;
  color: rgba(0, 0, 0, 0);
  // transition: opacity 0.25s;
}
.v-menu-button--checked:before {
  transform: rotate3d(0, 0, 1, 45deg);
  background: white;
}
.v-menu-button--checked:after {
  transform: rotate3d(0, 0, 1, -45deg);
  background: white;
}
.v-menu-button--checked > span {
  opacity: 0;
}

.v-menu-button--checked > span,
.v-menu-button--checked:after,
.v-menu-button--checked:before {
}
</style>
