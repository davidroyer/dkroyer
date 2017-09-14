<template>
<div class="contact">
  <div class="hero is-primary is-bold is-small">
    <div class="container">
      <h1 class="title">Get In Touch</h1>
    </div>
  </div>
  <section class="container content">
    <div><h4>TEST HERE!</h4></div>
  </section>
</div>
</template>

<script>
import VueResource from '~/plugins/vue-resource'

export default {
  head: {
    title: 'Contact Me'
  },
  asyncData({}) {
    return {
        'form-name': 'contact',
        name: '',
        email: '',
        message: ''
    }
  },
  methods: {
    handleForm($event) {
      $event.preventDefault()
      let action = $event.target.action
      // let form = this.form

      // const {
      //   name,
      //   email,
      //   message
      // } = this.form

      let body = {
        'form-name': 'contact',
        name: this.name,
        email: this.email,
        message: this.message
      }

      this.$http.options.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      this.$http.post('/thank-you', body, {
        emmulateJSON: true
      }).then(response => {
        this.$router.push('/thank-you')
      }, response => {});
    }
  }
}
</script>

<style lang="scss">
.siteContent {
    max-width: 100%;

}
.submit {
    padding: 0.75em 1.5em;
    min-width: 120px;
    border-radius: 0;
}
#contactForm {
    margin: 0 auto;
    text-align: left;
    width: 600px;
    max-width: 100%;
    textarea {
        &:focus ~ .icon {
            color: #7a7a7a;
        }
    }
}
.contactForm {

    label {
        display: block;
        margin: 2em 1em;
        // width: 100%;
        text-align: left;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        text-align: left;
        font-size: 20px;
        padding: 0.25em;

    }
}
</style>
