<template>
  <div class="page-wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  position: relative;
  top: 0;
  margin-top: -12px;
  margin-bottom: -12px;
  padding-left: 6px;
  padding-right: 6px;
}
</style>
