<template>
  <div class="sidebar w-4/5 max-w-sm fixed pin-r pin-t pin-b">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.sidebar {
  z-index: 999999999;
}
</style>
