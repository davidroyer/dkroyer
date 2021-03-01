export default {
  name: [(v) => !!v || 'Name is required'],

  email: [
    (v) => !!v || 'E-mail is required',
    (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
  ],

  message: [(v) => !!v || 'Your message cannot be blank.']
}
