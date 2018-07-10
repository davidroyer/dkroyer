<template>
    <h2 :class="$style.test">Hello World From <code>VTest2</code></h2>
</template>

<script>
export default {}
</script>

<style lang="postcss" module>
.test {
  composes: m-2 p-2 border border-grey text-blue from global;
}
</style>
