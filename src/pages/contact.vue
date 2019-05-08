<template>
  <div class="contact">
    <v-hero class="page-heading">
      <v-headline
        class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white"
        :tag="1"
<<<<<<< HEAD
      >Get In Touch</v-headline>
=======
      >
        Get In Touch
      </v-headline>
>>>>>>> nuxtcms
    </v-hero>

    <v-wrapper>
      <div class="w-full max-w-md mx-auto">
        <form
<<<<<<< HEAD
          @submit.prevent="validateBeforeSubmit"
          class="form bg-white shadow-md rounded-md px-4 pb-8 my-6"
=======
          class="form bg-white shadow-md rounded-md px-4 pb-8 my-6"
          @submit.prevent="validateBeforeSubmit"
>>>>>>> nuxtcms
        >
          <div class="my-6">
            <v-input
              id="firstName"
              ref="firstName"
              v-model="form.firstName"
              label="First Name"
              validation="required"
            ></v-input>
          </div>

          <div class="my-6">
            <v-input
              id="email"
              ref="email"
              v-model="form.email"
              label="Email"
              type="email"
              validation="required|email"
            ></v-input>
          </div>

          <div class="mb-8 max-w-sm mx-auto">
            <v-text
              id="message"
              ref="message"
              v-model="form.message"
              label="Message"
              validation="required"
            ></v-text>
          </div>
          <div class="mt-6 flex items-center justify-between max-w-sm mx-auto">
            <v-button
              type="submit"
<<<<<<< HEAD
              @click.prevent="validateBeforeSubmit"
              color="white"
              class="ml-auto bg-grey-darkest hover:bg-white hover:text-grey-darkest hover:border-grey-darkest hover:border-2 font-bold py-2 px-4 rounded"
            >Send</v-button>
=======
              color="white"
              class="ml-auto bg-grey-darkest hover:bg-white hover:text-grey-darkest hover:border-grey-darkest hover:border-2 font-bold py-2 px-4 rounded"
              @click.prevent="validateBeforeSubmit"
              >Send</v-button
            >
>>>>>>> nuxtcms
          </div>
        </form>
      </div>
    </v-wrapper>
  </div>
</template>

<script>
import '@/plugins/vee-validate'

export default {
  head () {
    return {
      title: 'Contact Me'
    }
  },
  $_veeValidate: {
    validator: 'new'
  },
  data () {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    validateBeforeSubmit () {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.handleSubmit()
        } else {
          this.$nextTick(() => {
            const firstErrorInput = this.errors.items[0].field
            console.log(firstErrorInput)
            this.$refs[firstErrorInput].setFocus()
          })
        }
      })
    },
    handleSubmit () {
      fetch('/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.encode({
          'form-name': 'contact',
          ...this.form
        })
      })
        .then(() => {
          this.form.firstName = ''
          this.form.email = ''
          this.form.message = ''

          this.$nextTick(() => {
            this.$validator.reset()
            alert('Form Submitted Successfully!')
          })
        })
        .catch(error => alert(error))
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
  .form {
    margin-top: -40px;
    padding-top: 3rem;
  }
}
</style>
