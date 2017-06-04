<template>
  <section class="container">
    <div>
      <h1 class="title">Login</h1>
      <!-- <template v-if="!user">
        <h1 class="title">Test Sign Up/Login</h1>
        <button class="button--grey" @click="signInWithGoogle">Sign In</button>
      </template>
      <template v-if="user">
        <h1 class="title">This will be the ADMIN AREA</h1>
        <button class="button--grey" @click="signOut">Sign Out</button>
      </template> -->
    </div>
  </section>
</template>

<script>
// import firebase from 'firebase'
// import firebase from '~plugins/fireAuth'
//
// var config = {
//   apiKey: "AIzaSyAvZsCxszOfqm3lgMxeEpR0D2Y1AKDTTJQ",
//   authDomain: "dkroyer-b14b2.firebaseapp.com",
//   databaseURL: "https://dkroyer-b14b2.firebaseio.com",
//   projectId: "dkroyer-b14b2",
//   storageBucket: "dkroyer-b14b2.appspot.com",
//   messagingSenderId: "25273876330"
// };
// var firebaseApp = firebase.initializeApp(config)
//
// var DB = firebaseApp.database()
// var auth = firebase.auth()
// var STORAGE = firebase.storage()
export default {
  data() {
    return {
      // user: null
    }
  }
  // beforeCreated() {
  //   fireAuth.onAuthStateChanged((user) => {
  //     if (user) {
  //       this.user = user
  //       // this.$bindAsArray('items', db.ref(`items/${user.uid}`))
  //     }
  //     this.loading = false
  //   })
  // },
  // methods: {
  //   signInWithGoogle() {
  //     const provider = new firebase.auth.GoogleAuthProvider()
  //     fireAuth.signInWithRedirect(provider).then((result) => {
  //       this.user = result.user
  //     }).catch(err => console.log(error))
  //   },
  //   signOut() {
  //     fireAuth.signOut().then(() => {
  //       this.user = null
  //     }).catch(err => console.log(error))
  //   }
  // }

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
        background: white !important;
        cursor: pointer;
    }
}
</style>
