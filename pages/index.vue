<template>
  <section class="container">
    <div>
      <h1 class="title">Index File</h1>

    </div>
  </section>
</template>

<script>


import Logo from '~components/Logo.vue'
// console.log(fireAuth);
export default {
  head: {
    // script: [
    //   { src: 'https://www.gstatic.com/firebasejs/4.1.1/firebase.js' }
    // ]
  },
  components: {
    Logo
  },
  data() {
    return {
      user: null
    }
  },
  created () {

  },
  methods: {

  }
}
</script>

<style>

</style>
