<template>
  <div :class="['vcard', $style.card]">
    <div :class="['vcard-header', $style.cardHeader]">
      <slot name="header">
        <div class="font-bold text-xl mb-2">You need to add something in the header slot...</div>
      </slot>
      <slot name="content"></slot>
    </div>
    <div :class="['vcard-footer', $style.cardFooter]">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard'
}
</script>

<style lang="postcss" module>
.card {
  composes: max-w-sm rounded overflow-hidden my-6 from global;
}

.cardHeader, .cardFooter {
   composes: px-6 py-4 from global;
}
</style>
