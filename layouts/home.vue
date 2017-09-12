<template>
  <div class="siteWrapper home">
    <app-header/>
      <nuxt class="siteContent"/>
    <app-footer/>
  </div>
</template>

<script>

import AppHeader from '~/components/Header.vue'
import AppFooter from '~/components/Footer.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
.home {
  div.hero {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
  }
  .title {
    color: white;
    font-size: 10vw;
    margin-left: .25em;
    margin-top: -2em;
    font-weight: 500;

    @media (min-width: 1400px) {
      font-size: 140px;
    }
    /*
    margin-left: 48px;*/
  }

}


.siteWrapper {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.siteContent {
  flex: 1
}

html
{
  /*font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;*/
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
</style>
