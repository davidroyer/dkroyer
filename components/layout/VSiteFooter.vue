<template>
  <v-footer height="auto" color="#84939f33" class="p2-4">
    <v-card class="text-center footer-inner-card white--text" flat tile>
      <v-card-text>
        <v-btn
          v-for="item in socialLinks"
          :key="item.url"
          :aria-label="`Link to my page`"
          icon
          class="mx-1"
          :href="item.url"
          target="_blank"
        >
          <v-icon color="primary darken-1" large> {{ item.icon }}</v-icon>
        </v-btn>
        <hr class="my-3" width="200%" style="margin-left: -50%" />
        <div class="primary--text text--darken-1 font-weight-thin">
          &copy; David Royer {{ new Date().getFullYear() }}
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  computed: {
    socialLinks() {
      return [
        {
          icon: this.$vuetify.icons.values.mdiGithub,
          url: 'https://github.com/davidroyer'
        },
        {
          icon: this.$vuetify.icons.values.mdiTwitter,

          url: 'https://twitter.com/DavidRoyer_'
        },
        {
          icon: this.$vuetify.icons.values.mdiLinkedin,
          url: 'https://www.linkedin.com/in/dkroyer/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-footer {
  .v-card {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
  }

  .footer-inner-card {
    box-shadow: none;
    background: none;
  }
}
</style>
