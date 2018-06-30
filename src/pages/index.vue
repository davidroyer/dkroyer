<template>
  <div class="home">
    <v-hero>
      <v-headline class="relative px-4 text-5xl md:text-6xl lg:text-7xl font-light text-center text-white" :tag="1">Front End Web Developer</v-headline>
    </v-hero>
    <v-wrapper>
      <v-intro :tag="1" text="Tailwind styleguide with NuxtJS!">
        It's a real pleasure to have you here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, similique atque doloribus consectetur error voluptatem esse rerum repellat temporibus voluptatum labore excepturi minus eius cumque quasi inventore at alias repellendus.
      </v-intro>
    </v-wrapper>
  </div>

</template>

<script>
export default {
  head() {
    return {
      title: 'Home'
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .hero {
    background-attachment: fixed;
    background-image: url('~/assets/images/blog-me.jpeg');
    &:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(
        to bottom right,
        rgba(32, 35, 58, 0.75),
        rgba(34, 41, 47, 0.75)
      );
      opacity: 0.7;
    }
  }
}
</style>
