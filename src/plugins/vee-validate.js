import Vue from 'vue'
// import {
//   Validator,
//   install as VeeValidate
// } from 'vee-validate/dist/vee-validate.minimal.esm.js'
// import { required, email } from 'vee-validate/dist/rules.esm.js'
// import veeEn from 'vee-validate/dist/locale/en'
import VeeValidate from 'vee-validate'

// Add the rules you need.
// Validator.extend('required', required)
// Validator.extend('email', email)

// Merge the messages.
// Validator.localize('en', veeEn)

// install the plugin
Vue.use(VeeValidate)
