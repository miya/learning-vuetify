<template>
  <v-bottom-navigation>
  <v-btn value="user">
    <span>User</span>
    <v-icon>mdi-account</v-icon>
  </v-btn>

  <v-btn value="record">
    <span>Record</span>
    <v-icon>mdi-chart-bell-curve</v-icon>
  </v-btn>

  <v-btn value="study">
    <span>Study</span>
    <v-icon>mdi-lead-pencil</v-icon>
  </v-btn>
</v-bottom-navigation>
</template>

<script>
export default {
  name: 'PageFooter'
}
</script>
