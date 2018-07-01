<template>
  <div class="card max-w-sm rounded overflow-hidden my-6">
    <div class="px-6 py-4">
      <slot name="header">
        <div class="font-bold text-xl mb-2">You need to add something in the header slot...</div>
      </slot>
      <slot name="content"></slot>
    </div>
    <div class="px-6 py-4">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VCard'
}
</script>
