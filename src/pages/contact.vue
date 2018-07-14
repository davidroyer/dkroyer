<template>
<div class="contact">
  <v-hero class="page-heading">
    <v-headline class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white" :tag="1">
      Get In Touch
    </v-headline>
  </v-hero>

  <v-wrapper>
    <div class="w-full max-w-md mx-auto">
      <form class="form bg-white shadow-md rounded-md px-4 pb-8 my-6">
        <div class="my-6">
          <v-input color="grey-darker" required v-model="form.firstName" id="firstName" label="Your First Name"></v-input>
        </div>
        <div class="my-6">
          <v-input color="grey-darker" required v-model="form.email" id="email" type="email" label="Your Email"></v-input>
        </div>
        <div class="mb-8 max-w-sm mx-auto">
          <v-text required id="message" v-model="form.message" label="Message"></v-text>
        </div>
        <div class="flex items-center justify-between max-w-sm mx-auto">
          <v-button type="submit" @click.prevent="handleSubmit" class="ml-auto bg-grey-darkest hover:bg-white hover:text-grey-darkest hover:border-grey-darkest hover:border-2 text-white font-bold py-2 px-4 rounded">Send</v-button>
        </div>
      </form>
    </div>
  </v-wrapper>
</div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact Me'
    }
  },

  data() {
    return {
      form: {
        firstName: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&')
    },
    handleSubmit() {
      const firstNameField = document.getElementById('firstName')
      const emailField = document.getElementById('email')
      const messageField = document.getElementById('message')

      if (firstNameField.validity.valid && emailField.validity.valid && messageField.validity.valid) {
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
            alert('Success!')
            this.form.firstName = ''
            this.form.email = ''
            this.form.message = ''
          })
          .catch(error => alert(error))
      } else {
        alert('You have invalid fields')
      }
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
