<template lang="html">
  <div class="container">

    <div class="mb-4">
      <code class="block mb-2 text-grey-dark">.grid.grid-columns-3</code>
      <div class="grid grid-columns-3 h-16">
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
      </div>
    </div>

    <div class="mb-4">
      <code class="block mb-2 text-grey-dark">.grid.grid-columns-3.grid-gap-8</code>
      <div class="grid grid-columns-3 grid-gap-8 h-16">
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
      </div>
    </div>

    <div class="mb-4">
      <code class="block mb-2 text-grey-dark">.grid.grid-columns-3.grid-gap-4</code>
      <div class="grid grid-columns-3 grid-gap-4 h-16 mb-4">
        <div class=""></div>
        <div class=""></div>
        <div class=""></div>
      </div>
    </div>


    <div class="mb-4">
      <h3>Using <code class="block mb-2 text-grey-dark">.grid.grid-columns-12</code></h3>
      <div class="grid grid-columns-12 grid-gap-4 h-16">
        <div class="col-span-4"></div>
        <div class="col-span-8"></div>
      </div>
    </div>

    <h3>.grid .columns-auto-fill - 12 children</h3>
    <div class="grid columns-auto-fill">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </div>

    <h3>.grid .columns-auto-fit - 12 children</h3>
    <div class="grid columns-auto-fit">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </div>

    <h3>.grid .columns-auto-fill - 3 children</h3>
    <div class="grid columns-auto-fill">
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    <div class="grid-item"></div>
    </div>

    <h3>.grid .columns-auto-fit - 3 children</h3>
    <div class="grid columns-auto-fit">
      <div class="grid-item"></div>
      <div class="grid-item"></div>
      <div class="grid-item"></div>
    </div>
  </div>

</template>

<script>
export default {}
</script>

<style lang="scss">
.grid > *:nth-child(odd) {
  @apply .bg-grey-light;
}
.grid > *:nth-child(even) {
  @apply .bg-grey;
}
</style>
