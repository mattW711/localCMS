<template>
  <v-tabs
    color="cyan"
    dark
    slider-color="yellow"
    v-model="active"
  >
    <v-tab to="/tabs/one">
      Item 1
    </v-tab>
    <v-tab to="/tabs/two">
      Item 2
    </v-tab>
    <v-tab to="/tabs/three">
      Item 3
    </v-tab>
    <v-tabs-items v-model="active">
      <router-view></router-view>
    </v-tabs-items>
  </v-tabs>
</template>

<script>
export default {
  data: () => ({
    active: null
  })
}
</script>
