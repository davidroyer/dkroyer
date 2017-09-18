<template>
  <social-sharing
    class="socialShare"
    :url="currentUrl"
    :title="title"
    description="Learn Nuxt.js Tips"
    twitter-user="davidroyer_"
    inline-template>

   <div>
     <span id="socialShareCTA">Share</span>
       <network network="email">
          <i class="fa fa-envelope"></i>
       </network>
       <network network="facebook">
         <i class="fa fa-facebook"></i>
       </network>
       <network network="twitter">
         <i class="fa fa-twitter"></i>
       </network>
   </div>
  </social-sharing>
</template>

<script>
export default {
  props: ['currentUrl', 'title']
}
</script>

<style lang="scss">
.socialShare {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: white;
  padding: .5em;
  box-shadow: 0 2px 3px hsla(0, 0%, 4%, 0.55);
  padding: .5em 1em;
  border-radius: 40px;
  display: flex;
  align-items: center;

  span {
    margin: 0 .5em;
    cursor: pointer;
    transition: .2s ease;
    &:hover {
      color: #00d1b2;
    }
  }
  #socialShareCTA {
    cursor: auto;
    font-size: .9em;
    margin: 0 5px 0;

    &:hover {
      color: initial;
    }
  }
}
</style>
