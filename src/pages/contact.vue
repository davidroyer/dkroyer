<template>
  <div class="contact">
    <v-hero class="page-heading">
      <v-headline class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white" :tag="1">
        Get In Touch
      </v-headline>
    </v-hero>
    <v-wrapper>
      <!-- <h1 class="mb-8 text-center font-bold text-4xl">Get In Touch</h1> -->
      <div class="w-full max-w-md mx-auto">
        <form class="bg-white shadow-lg rounded-lg px-8 py-8 my-6">
          <div class="my-6">
            <v-input required v-model="form.firstName" id="firstName" label="Your First Name"></v-input>
          </div>
          <div class="my-6">
            <v-input required v-model="form.email" id="email" type="email" label="Your Email"></v-input>
          </div>
          <div class="mb-8 pt-4 max-w-sm mx-auto">
            <label class="block text-grey-darker text-sm font-bold mb-2" for="message">Message</label>
            <textarea required id="message" v-model="form.message" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3 leading-normal" name="message" rows="8" cols="80" placeholder="Write A Message..."></textarea>
          </div>
          <div class="flex items-center justify-between max-w-sm mx-auto">
            <v-button type="submit" @click.prevent="handleSubmit" class="ml-auto bg-black hover:bg-white hover:text-black hover:border-black hover:border-2 text-white font-bold py-2 px-4 rounded">Send</v-button>
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

      if (
        firstNameField.validity.valid &&
        emailField.validity.valid &&
        messageField.validity.valid
      ) {
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
// .hero {
//   min-height: 120px;
//   height: Initial !important;
//   max-height: 350px;
//   // background-image: linear-gradient(141deg, #22292f, #0b3176 71%, #5661b3);
//   // background-image: linear-gradient(
//   //   141deg,
//   //   #22292f,
//   //   rgba(32, 35, 58, 0.75),
//   //   71%,
//   //   rgba(34, 41, 47, 0.75)
//   // );
//   // background-image: linear-gradient(
//   //   141deg,
//   //   #111111,
//   //   rgba(32, 35, 58, 0.83),
//   //   71%,
//   //   rgba(0, 0, 0, 0.85)
//   // );
//   background-image: linear-gradient(
//     141deg,
//     #1111118c,
//     rgba(32, 35, 58, 0.56),
//     71%,
//     rgba(0, 0, 0, 0.51)
//   );
//   color: white;
//
//   .container {
//     position: relative;
//   }
// }
</style>
