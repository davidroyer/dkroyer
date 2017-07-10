<template>
  <section class="container">
    <h1 class="title">
      Contact Me
    </h1>
    <!-- A little help for the Netlify post-processing bots -->
    <form name="contact" netlify netlify-honeypot="bot-field" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>

    <form method="post">
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
    </form>

      <form name="contact" action="thank-you" netlify>
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
export default {
  head: {
    title: 'Contact Me'
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
