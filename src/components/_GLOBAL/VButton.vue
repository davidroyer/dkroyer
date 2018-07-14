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
      default: 'grey-darkest'
    },
    buttonClasses: Array
  }
}
</script>

<style lang="scss" scoped>
.v-button {
  transition: all 0.2s ease;
  cursor: pointer;
  @apply .font-semibold shadow .py-2 .px-4 .rounded .border-2 .border-grey-darkest;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover,
  &:focus {
    @apply .bg-black .text-white shadow-md;
  }
}
</style>
