<template>
  <v-toolbar-items>
    <v-btn
      v-for="(route, key) in $store.state.nav"
      :key="key"
      nuxt
      text
      :to="route.to"
      color="primary"
    >
      {{ route.label }}
    </v-btn>
  </v-toolbar-items>
</template>
