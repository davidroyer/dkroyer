<template>
  <section class="container">
      <h1 class="title">
        Contact Me
      </h1>
      <form class="contactForm" name="contact" action="" netlify>
        <label for="name">
          Name
          <input type="text" name="name" value="">
        </label>
        <label for="name">
          Name
          <textarea rows="8" cols="50" name="message"></textarea>
        </label>
        <button class="">Submit Form</button>

      </form>
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
  button {
    -webkit-appearance: none;
    background: white;
    border: #40526b 2px solid;
    font-size: 1em;
    padding: .5em 1.25em;
    border-radius: 3px;
    font-family: "Roboto";
    font-weight: 500;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
      font-weight: 700;
      background: #40526b;
      color: white;
    }
  }
}
</style>
