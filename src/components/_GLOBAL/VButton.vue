<template>
  <button
    class="v-button"
    v-on="$listeners"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: ['tag', 'text']
}
</script>

<style lang="scss">
.v-button {
  transition: all 0.2s ease;
  cursor: pointer;
  @apply .font-bold .py-2 .px-4 .rounded .border-2 .border-black .text-black;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    @apply .bg-black .text-white;
  }
}
</style>
