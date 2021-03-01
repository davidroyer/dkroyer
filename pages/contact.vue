<template>
  <v-page-wrapper>
    <page-banner text="Get In Touch" />

    <v-row align="center" justify="center" class="py-12">
      <v-col sm="8" md="6">
        <v-form ref="contactForm" v-model="valid" name="contact">
          <v-text-field
            name="firstName"
            :rules="validationRules.name"
            label="First Name"
          />
          <v-text-field
            :rules="validationRules.email"
            label="Your Email"
            type="email"
            name="email"
          />
          <v-textarea
            :rules="validationRules.message"
            class="mt-8"
            outlined
            label="Your Message"
            name="message"
          />
          <input type="hidden" name="form-name" value="contact" />
          <v-btn color="primary" @click="handleSubmit">Send Message</v-btn>
        </v-form>

        <v-snackbar
          v-model="showSubmissionConfirmation"
          class="text-center font-weight-bold"
          timeout="2500"
        >
          Your form has been submitted
        </v-snackbar>
      </v-col>
    </v-row>
  </v-page-wrapper>
</template>

<script>
import { validationRules, netlifyFormHandler } from '@/utils'

export default {
  data: () => ({
    valid: true,
    validationRules,
    showSubmissionConfirmation: false
  }),

  methods: {
    async handleSubmit() {
      const vForm = this.$refs.contactForm
      const validForm = vForm.validate()

      if (validForm) {
        const htmlForm = vForm.$el
        await netlifyFormHandler(htmlForm)

        this.showSubmissionConfirmation = true
        vForm.reset()
      }
    }
  },
  head() {
    const { title, description } = this.$store.state.nav.contact

    return {
      title,

      meta: this.$seo({
        title,
        description
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-form {
  display: flex;
  flex-direction: column;

  .v-btn {
    margin-left: auto;
  }
}
</style>
