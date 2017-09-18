<template>
  <social-sharing
    :url="url"
    :title="this.post.title"
    description="Learn Nuxt.js Tips"
    twitter-user="davidroyer_"
    inline-template>
   <div>
       <network network="email">
           <i class="fa fa-envelope"></i> Email
       </network>
       <network network="facebook">
         <i class="fa fa-facebook"></i> Facebook
       </network>
       <network network="linkedin">
         <i class="fa fa-linkedin"></i> LinkedIn
       </network>
       <network network="twitter">
         <i class="fa fa-twitter"></i> Twitter
       </network>
   </div>
  </social-sharing>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
