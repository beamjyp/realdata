<template>
  <div><Contact /><Navtest /></div>
</template>

<script>
import { getUserFromCookie } from '@/helper'
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      const user = getUserFromCookie(req)
      console.log('fix')
      console.log(user)
      if (!user) {
        redirect('/pagelogin')
      }
    } else {
      const user = firebase.auth().currentUser
      if (!user) {
        redirect('/pagelogin')
      }
    }
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/pagelogin')
        })
    },
  },
}
</script>

<style scoped></style>
