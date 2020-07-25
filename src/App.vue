<template>
  <v-app>
    <v-main>
      <Header/>
      <router-view/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
};
</script>

<style scoped>

</style>
