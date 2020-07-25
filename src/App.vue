<template>
  <v-app>
    <v-main>
      <PageHeader/>
      <HelloWorld/>
      <PageFooter/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PageHeader from './components/Header'
import PageFooter from './components/Footer'

export default {
  name: 'App',
  components: {
    PageHeader,
    HelloWorld,
    PageFooter
  }
};
</script>

<style scoped>

</style>
