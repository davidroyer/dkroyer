<template lang="html">
  <div class="v-text max-w-sm mx-auto my-6">
    <label v-text="label" :for="attrs.id" class="v-text-label"></label>
    <textarea
      :value="value"
      :id="id"
      ref="input"
      v-on="inputListeners"
      :rows="rows"
      class="v-text-textarea"
      :classes="`text-${color}`"
      v-bind="attrs"
      :name="attrs.name || id"
      :data-vv-as="label"
      >
    </textarea>
    <transition name="slide">
      <p v-show="errorMessage" class="v-input-message">{{ errorMessage }}</p>
    </transition>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  name: 'VText',
  $_veeValidate: {
    name() {
      return this.id
    },
    value() {
      return this.value
    }
  },
  props: {
    value: {
      type: String
    },
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'grey-darkest'
    },
    errorMessage: String
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
  },

  methods: {
    setFocus() {
      this.$refs.input.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
.v-text {
  &-label {
    @apply block uppercase tracking-wide text-grey-darkest text-sm font-bold mb-2;
  }

  &-textarea {
    transition: all 0.2s ease;
    @apply .shadow .appearance-none .border-2 .rounded .w-full .py-2 .px-3 font-medium .leading-normal;

    &:focus {
      @apply .bg-grey-lighter border-grey-darkest;
    }
  }
}
</style>
