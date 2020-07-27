<template>
  <v-app class="content">
    <p class="question-num mt-10">{{ queNum }}/10</p>
    <p class="display-3">Hello</p>
    <v-btn rounded outlined>こんにちは</v-btn>
    <v-btn rounded outlined>こんばんわ</v-btn>
    <v-btn rounded outlined>おはようございます</v-btn>
    <v-btn rounded outlined>こんにちは</v-btn>
    <v-btn class="btn-next" rounded >次へ</v-btn>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      queNum: 1
    }
  }
}
</script>

<style scoped>
.content {
  background-color: #f5f5f5;
}
.question-num {
  color: #6c757d;
  font-size: 20px;
}

button {
  margin: 5px 18px;
}
.btn-next {
  width: 100px;
}
</style>
