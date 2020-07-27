<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <v-card-title>
        <h3>問題選択</h3>
      </v-card-title>
      <v-card-text>
        <div v-for="question in questionData" :key="question.name">
          <v-badge overlap bordered color="error" :content="question.rate.toString() + '%'">
            <v-btn class="mb-2" width="200" color="danger" @click="openModal(question.id)">{{ question.name }}</v-btn>
          </v-badge>
        </div>
      </v-card-text>
    </v-card>

    <v-dialog v-model="dialog" persistent scrollable max-width="290">
      <v-card>
        <v-card-title class="headline">{{ pickedQuestionData.name }}</v-card-title>
        <v-card-text>
          <v-radio-group v-model="pickedQuestionData.level" column>
            <v-radio v-for="level in pickedQuestionData.levelLength" :key="level" :label="`Level-${level}`" :value="level"></v-radio>
          </v-radio-group>
          <v-divider></v-divider>
          <v-btn color="blue darken-1" text :disabled="!pickedQuestionData.level" @click="startQuestion">ok</v-btn>
          <v-btn color="blue darken-1" text @click="closeModal">close</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      pickedQuestionData: {},
      questionData: {
        1: {
          id: 1,
          name: '高校受験',
          levelLength: 5,
          rate: 80
        },

        2: {
          id: 2,
          name: 'でる単2級',
          levelLength: 4,
          rate: 60
        },

        3: {
          id: 3,
          name: 'でる単1級',
          levelLength: 3,
          rate: 7
        }
      }
    }
  },

  methods: {
    openModal (id) {
      this.pickedQuestionData = this.questionData[id]
      this.dialog = true
    },

    closeModal () {
      this.dialog = false
      this.pickedQuestionData = {}
    },

    startQuestion () {
      this.$router.push({
        name: 'Study',
        params: {
          questionName: this.pickedQuestionData.name,
          questionLevel: this.pickedQuestionData.level
        }
      })
    }
  }
}
</script>

