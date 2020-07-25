<template>
  <v-app>
    <v-main>
      <Header/>
      <Login/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Login from './components/Login'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Login,
    Footer
  }
};
</script>

<style scoped>

</style>
