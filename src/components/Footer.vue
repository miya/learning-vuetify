<template>
  <v-bottom-navigation dark shift>
  <v-btn value="user" @click="jumpUser">
    <span>User</span>
    <v-icon>mdi-account</v-icon>
  </v-btn>

  <v-btn value="record">
    <span>Record</span>
    <v-icon>mdi-chart-bell-curve</v-icon>
  </v-btn>

  <v-btn value="study" @click="jumpPick">
    <span>Study</span>
    <v-icon>mdi-lead-pencil</v-icon>
  </v-btn>
</v-bottom-navigation>
</template>

<script>
export default {
  methods: {
    jumpUser () {
      if (this.$route.name !== 'User') {
        this.$router.push('/user')
      }
    },

    jumpPick () {
      if (this.$router.name !== 'Pick') {
        this.$router.push('/pick')
      }
    }
  }
}
</script>
