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
      v-on="inputListeners"
      v-bind="$attrs"
      v-validate="validation"
      :data-vv-as="label"
      :data-vv-name="id"
    />
    <transition name="slide">
      <p v-show="validation && errors.has(id)" class="v-input-message">{{ errors.first(id) }}</p>
    </transition>
  </div>
</template>

<script>
import validationMixin from './mixins/validation-mixin'

export default {
  name: 'VInput',
  inheritAttrs: false,
  mixins: [validationMixin],
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
      default: 'grey-darkest'
    }
  },
  computed: {
    labelClasses() {
      return [`text-${this.color}`]
    },

    inputClasses() {
      return [`v-input-${this.type}`, `text-${this.color}`]
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

<style lang="scss" scoped>
.v-input {
  @apply .max-w-sm .mx-auto .my-6;

  input[class^='v-input-'] {
    @apply .border-grey-light .appearance-none .block .w-full .rounded .py-3 .px-4 .leading-tight font-medium border-2;
    transition: all 0.2s ease;

    &:focus {
      @apply .bg-grey-lighter border-grey-darkest;
    }
  }

  &-label {
    @apply .block .uppercase .tracking-wide .text-sm .font-bold .mb-2;
  }
}
</style>
