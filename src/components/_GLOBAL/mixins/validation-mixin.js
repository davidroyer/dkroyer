const validationMixin = {
  inject: { $validator: '$validator' },
  props: {
    validation: String
  }
}

export default validationMixin
