<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
        <v-card-title>
          <h3>アカウント情報</h3>
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <tr>
                <td>表示名</td>
                <td>{{ user.displayName }}</td>
              </tr>
              <tr>
                <td>メールアドレス</td>
                <td>{{ user.email }}</td>
              </tr>
              <tr>
                <td>uid</td>
                <td>{{ user.uid }}</td>
              </tr>
              <tr>
                <td>アカウント作成</td>
                <td>{{ user.createdAt }}</td>
              </tr>
              <tr>
                <td>最終ログイン</td>
                <td>{{ user.lastLogin }}</td>
              </tr>
            </template>
        </v-simple-table>
      </v-card-text>
      <v-btn block text color="info">ログアウト</v-btn>
      <v-btn block text color="info" >パスワード変更</v-btn>
      <v-btn block text color="info">アカウントの削除</v-btn>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      user: {
        'displayName': 'Oyama Tatuya',
        'email': 'oyama@gmail.com',
        'uid': 'cdksn9kcd8jcd8u3jd',
        'createdAt': '',
        'lastLogin': ''
      }
    }
  }
}
</script>
