<template>
  <div class="v-input">
    <label
      v-text="label"
      :for="id"
      :class="labelClasses"
      class="v-input-label">
    </label>
    <input
      ref="input"
      :type="type"
      :value="value"
      :id="id"
      :name="$attrs.name || id"
      :class="inputClasses"
      class=""
      v-on="inputListeners"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'VInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    labelClasses() {
      return [`text-${this.color}`]
    },

    inputClasses() {
      return [`v-input-${this.type}`]
    },
    inputListeners() {
      return {
        ...this.$listeners,
        input: event => this.$emit('input', event.target.value)
      }
    }
  },

  methods: {
    setFocus() {
      this.$refs.input.focus()
    }
  }
}
</script>

<style src="@/assets/styles/components/VInput.scss" lang="scss">

</style>
