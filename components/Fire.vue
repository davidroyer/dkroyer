<template>
<div class="fire">
  <template v-if="!user">
      <h1 class="title">Test Sign Up/Login</h1>
      <button class="button--grey" @click="signInWithGoogle">Sign In</button>
    </template>
  <template v-if="user">
      <h1 class="title">This will be the ADMIN AREA</h1>
      <button class="button--grey" @click="signOut">Sign Out</button>
    </template>
</div>
</template>

<script>
let firebase

if (process.browser) {
  firebase = require('firebase')

  var config = {
    apiKey: "AIzaSyAvZsCxszOfqm3lgMxeEpR0D2Y1AKDTTJQ",
    authDomain: "dkroyer-b14b2.firebaseapp.com",
    databaseURL: "https://dkroyer-b14b2.firebaseio.com",
    projectId: "dkroyer-b14b2",
    storageBucket: "dkroyer-b14b2.appspot.com",
    messagingSenderId: "25273876330"
  };
  var firebaseApp = firebase.initializeApp(config)
  var DB = firebaseApp.database()
  var auth = firebase.auth()
  var STORAGE = firebase.storage()

}
export default {
  name: 'Fire',
  data() {
    return {
      user: null
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user
        // this.$router.push('/login')
        // this.$bindAsArray('items', db.ref(`items/${user.uid}`))
      }
      this.loading = false
    })
  },
  methods: {
    signInWithGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(provider).then((result) => {
        this.user = result.user
        this.$router.push('/login')
      }).catch(err => console.log(error))
    },
    signOut() {
      firebase.auth().signOut().then(() => {
        this.user = null
      }).catch(err => console.log(error))
    }
  }

}
</script>

<style lang="scss">
.fire {
    padding: 2em;
    position: relative;
    top: 60px;
    text-align: center;
    width: 100%;

    button {
        font-weight: 500 !important;
        font-family: 'Roboto';
        font-size: 18px;
        background: white;
        cursor: pointer;
        transition: .2s ease;

        &:hover {
          background-color: #35495e !important;
        }
    }
}
</style>
