<template>
  <div class="v-card">
    <div class="v-card-image" v-if="$slots.image">
      <!-- Use this slot for a card image -->
      <slot name="image"/>
    </div>

    <!-- This slot is where `v-card-header` and `v-card-body` go -->
    <slot/>

    <div class="v-card-footer" v-if="$slots.footer">
      <!-- Use this slot to for the card footer -->
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard'
}
</script>


<style lang="scss">
.v-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.75rem 1.25rem;
  @apply py-4 px-6 shadow-md w-full max-w-sm;

  &-header {
    flex: 1;
  }
  &-body {
    flex: 1;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    & > * {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }

  &-footer {
    flex: 1;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
}
</style>
