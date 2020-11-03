<template>
  <div>
    <div v-if="a" id="eiei">
      <Logo />
    </div>
    <div v-if="b" id="eie">
      <Dashboard />
    </div>
  </div>
</template>
<script>
import { getUserFromCookie } from '@/helper'
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  asyncData({ req, redirect }) {
    if (process.server) {
      const user = getUserFromCookie(req)
      console.log('eiei')
      console.log(user)
      if (!user) {
        redirect('/')
      }
    } else {
      const user = firebase.auth().currentUser
      if (!user) {
        redirect('/')
      }
    }
  },
  data() {
    return {
      a: true,
      b: false,
    }
  },
  created() {
    setTimeout(() => {
      this.a = false
      this.b = true
    }, 2000)
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
