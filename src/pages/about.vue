<template>
  <div class="about">
    <v-hero class="page-heading">
      <v-headline class="relative px-4 text-3xl sm:text-4xl md:text-5xl font-light text-center text-white" :tag="1">
        About
      </v-headline>
    </v-hero>
    <v-wrapper>
      <v-intro :tag="1" text="What we do">
        It's cool, man. Yep. It's <strong>cool</strong>.
      </v-intro>
    </v-wrapper>
  </div>
</template>

<script>
const metaDescription = 'Information on David Royer'

export default {
  head() {
    return {
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: metaDescription
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: metaDescription
        }
      ]
    }
  }
}
</script>
