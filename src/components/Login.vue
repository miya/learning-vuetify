<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h3 class="display-1">ログイン</h3>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="メールアドレス" v-model="form.email" prepend-icon="mdi-account-circle"/>
          <v-text-field
                  label="パスワード"
                  prepend-icon="mdi-lock"
                  v-model="form.password"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="showPassword ? 'text' : 'password'"
                  @click:append="showPassword = !showPassword"/>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn class="info" @click="login">ログイン</v-btn>
      </v-card-actions>
    </v-card>

    <v-snackbar v-model="snackbar">
      {{ message }}

      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data () {
      return {
        showPassword: false,
        snackbar: false,
        message: '',
        form: {
          'email': '',
          'password': ''
        }
      }
    },

    methods: {
      login () {
        if (!this.form.email) {
          this.message = 'メールアドレスが入力されていません。'
          this.snackbar = true
          return
        }

        if (!this.form.password) {
          this.message = 'パスワードが入力されていません。'
          this.snackbar = true
          return
        }

        if (this.form.email !== 'oyama@gmail.com' && this.form.password !== 'hogehoge') {
          this.message = 'メールアドレスまたはパスワードが間違っています。'
        }
      }
    }
  }
</script>
