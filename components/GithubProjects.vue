<template>
  <v-row class="card-grid">
    <v-col v-for="repo in repos" :key="repo.name" cols="12" sm="6">
      <v-card class="d-flex flex-column" style="height: 100%">
        <v-card-title>{{ repo.name | titleCase }}</v-card-title>
        <v-card-subtitle>
          <v-icon>$vuetify.icons.mdiStar</v-icon>
          {{ repo.stargazers_count }}
          <v-icon class="ml-2">$vuetify.icons.mdiSourceFork</v-icon>
          {{ repo.forks_count }}
        </v-card-subtitle>
        <v-card-text v-text="repo.description" />

        <v-divider class="mx-4 mb-2" />

        <v-card-actions>
          <v-spacer />
          <v-btn
            text
            class="primary--text lighten-2"
            target="_blank"
            :href="repo.html_url"
          >
            View Repo
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { titleCase } from '@/utils'

export default {
  fetchOnServer: false,

  filters: {
    titleCase
  },

  async fetch() {
    const popularReposUrl =
      'https://api.github.com/search/repositories?q=user:davidroyer&sort=stargazers_count&order=desc&per_page=6'

    const response = await fetch(popularReposUrl)
    const { items } = await response.json()
    this.repos = items
  },

  data: () => ({
    repos: []
  })
}
</script>
