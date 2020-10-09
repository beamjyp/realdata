<template>
  <div @submit.prevent="addData">
    <div class="stylec">
      <label>Name</label>
      <input v-model="txt" class="form-control" />
    </div>
    <div class="stylec">
      <input type="checkbox" aria-label="Checkbox for following text input" />
      <label class="text">Checkbox1</label>
      <input type="checkbox" aria-label="Checkbox for following text input" />
      <label class="text">Checkbox2</label>
      <input type="checkbox" aria-label="Checkbox for following text input" />
      <label class="text">Checkbox3</label>
    </div>
    <div class="stylec">
      <input
        v-for="n in 3"
        :key="n"
        v-model="radioGroup"
        type="radio"
        :label="'Radio ${n}'"
        :value="n"
      />
    </div>

    <button color="success" class="mr-4" @click="addData">Submit</button>
    <button color="warning" class="mr-4" @click="reset">Reset Form</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      txt: '',
      checkbox: [],
      radioGroup: null,
      switcher: false,
      rating: 3,
      slider: 20,
    }
  },
  methods: {
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      const data = {
        txt: this.txt,
        checkbox: this.checkbox,
        radioGroup: this.radioGroup,
        switcher: this.switcher,
        rating: this.rating,
        slider: this.slider,
      }
      db.collection('MyForm')
        .doc('formdata')
        .set(data)
        .then(function () {
          // eslint-disable-next-line no-console
          console.log('Document successfully written! -> MyForm')
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.error('Error writing document: ', error)
        })

      // เก็บข้อมูล Input Text ใน collection MyText (มีหลาย document ข้อมูลจะเพิ่มขึ้นเรื่อย ๆ )
      const dataText = {
        txt: this.txt,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      }
      db.collection('MyText')
        .doc()
        .set(dataText)
        .then(function () {
          // eslint-disable-next-line no-console
          console.log('Document successfully written! -> MyText')
        })
        .catch(function (error) {
          // eslint-disable-next-line no-console
          console.error('Error writing document: ', error)
        })
    },
    reset() {},
  },
}
</script>

<style>
.stylec {
  text-align: center;
  padding: 5px;
}
.text {
  margin-left: 5px;
}
</style>
