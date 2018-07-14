<template>
  <button
    class="v-button"
    :class="[`text-${color}`, ...buttonClasses]"
    v-on="$listeners"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    color: {
      type: String,
      default: 'black'
    },
    buttonClasses: Array
  }
}
</script>

<style lang="scss" scoped>
.v-button {
  transition: all 0.2s ease;
  cursor: pointer;
  @apply .font-bold .py-2 .px-4 .rounded .border-2 .border-black;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    @apply .bg-black .text-white;
  }
}
</style>
