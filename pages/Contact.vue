<template>
  <section class="container">
    <h1 class="title">
      Contact Me
    </h1>
    <!-- A little help for the Netlify post-processing bots -->
    <!-- <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form> -->

    <!-- <form method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form> -->

      <form id="contactForm" @submit.prevent="handleForm($event)" name="contact" netlify>
        <p>
          <label>Your Name: <input type="text" name="name"></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email"></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

      <!-- <form class="contactForm" name="contact" action="thank-you" netlify>
        <label for="name">
          Name
          <input type="text" name="name" value="">
        </label>
        <label for="name">
          Name
          <textarea rows="8" cols="50" name="message"></textarea>
        </label>
        <button type="submit">Submit Form</button>
      </form> -->
  </section>
</template>

<script>
import 'whatwg-fetch'
import VueResource from '~plugins/vue-resource'
// console.log(VueResource);
var root = 'https://jsonplaceholder.typicode.com';

// $.ajax({
//   url: root + '/posts/1',
//   method: 'GET'
// }).then(function(data) {
//   console.log(data);
// });
export default {
  head: {
    title: 'Contact Me'
  },

  methods: {
    handleForm($event) {
      $event.preventDefault()
      let action = $event.target.action
      var form = document.querySelector('form')
      // var data = new FormData(form)
      // console.log(data);


      let body = {
        'form-name': 'contact',
        name: 'David Royer',
        email: 'aimdc@me.com',
        phone: '5027511110',
        message: 'TEST'
      }
      let formData = new FormData(document.getElementById('contactForm'));

      formData.append('form-name', 'contact')

      this.$http.post('/thank-you', body, {
        emmulateJSON: true
      }).then(response => {
         console.log(response);
        //  alert('Thanks!')
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
  },
  mounted() {
    console.log(this);
    // console.log(this.$http);
    this.test()
  }
}
</script>

<style lang="scss">
.contactForm {

  font-family: 'Roboto';
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
