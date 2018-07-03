<template lang="html">
  <div class="vtext max-w-sm mx-auto my-6">
    <label v-text="label" :for="attrs.id" class="block uppercase tracking-wide text-grey-darker text-sm font-bold mb-2"></label>
    <textarea
      :value="value"
      v-on="inputListeners"
      :rows="rows"
      v-bind="attrs"
      :name="attrs.name || attrs.id"
      >
    </textarea>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'VText',
  props: {
    value: {
      type: String
    },
    label: {
      type: String,
      required: true
    }
  },
  computed: {
    inputListeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    },
    rows() {
      return this.$attrs.rows || 8
    },
    attrs() {
      const { rows, ...attrs } = this.$attrs
      return attrs
    }
  }
}
</script>

<style lang="css">
</style>
