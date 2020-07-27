<template>
  <v-app>
    <v-main>
      <Header/>
      <router-view class="content"/>
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
html {
  background-color: #f5f5f5;
}
.content {
  text-align: center;
}
</style>
