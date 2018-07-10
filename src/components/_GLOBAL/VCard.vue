<template>
  <div class="v-card">
    <div class="v-card-image" v-if="$slots.image">
      <slot name="image"></slot>
    </div>
    <div class="v-card-header">
      <slot name="header"></slot>
    </div>
    <div class="v-card-body">
      <slot name="body"></slot>
    </div>
    <div class="v-card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard'
}
</script>

<style lang="scss" scoped>
.v-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  max-width: 600px;
  // box-shadow: config('shadows.md');

  &-header {
    flex: 1;
    font-weight: config('fontWeights.semibold');
    line-height: config('leading.tight');
    & > * {
      margin-top: 0;
    }
  }
  &-body {
    flex: 1;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>
