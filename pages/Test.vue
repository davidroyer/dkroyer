<template>
  <section class="container">
    <h1 class="title">Contact Me
    </h1>

      <div>test content</div>
  </section>
</template>

<script>

import VueResource from '~/plugins/vue-resource'

export default {
  head: {
    title: 'Contact Me'
  },
  asyncData ({}) {
    return {
      form: {
        'form-name': 'contact',
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    handleForm($event) {
      $event.preventDefault()
      let action = $event.target.action
      // var form = document.querySelector('form')
      // var data = new FormData(form)
      // console.log(data);
      let form = this.form

      const {name, email, message} = this.form

      let body = {
        'form-name': 'contact',
        name: name,
        email: email,
        message: message
      }

      this.$http.options.headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
      this.$http.post('/thank-you', body, {
        emmulateJSON: true
      }).then(response => {
        this.$router.push('/thank-you')
      }, response => {});

      // fetch(action, {
      //   method: 'POST',
      //   body: new FormData(form)
      // })

      // $("#my-form").submit(function(e) {
      //   e.preventDefault();
      //
      //   var $form = $(this);
      //   $.post($form.attr("action"), $form.serialize()).then(function() {
      //     alert("Thank you!");
      //   });
      // });
    },
    result() {
    },
    test() {
      var root = 'https://jsonplaceholder.typicode.com/posts/1';

      this.$http.get(root).then(response => {

        // get body data
        var Data = response.body;
        console.log(Data);
      }, response => {
        // error callback
      });

    }
  }
}
</script>

<style lang="scss">
.siteContent {
  max-width: 100%;

}
.submit {
  padding: .75em 1.5em;
  min-width: 120px;
  border-radius: 0;
}
#contactForm {
  margin: 0 auto;
  text-align: left;
  width: 600px;
  max-width: 100%;
  textarea {
    padding-left: 2.25em;

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

  input, textarea {
    display: block;
    width: 100%;
    text-align: left;
    font-size: 20px;
    padding: .25em;

  }
}
</style>
