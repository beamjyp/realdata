<template>
  <div>
    <!-- <lu>
      <nuxt-link to="/">home</nuxt-link>
      <button @click="logout">logout</button>
    </lu>
    <h><User /></h> -->
    <Navtest />
    <User />
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
        redirect('/pagelogin')
      }
    } else {
      const user = firebase.auth().currentUser
      if (!user) {
        redirect('/pagelogin')
      }
    }
  },
}
</script>

<style scoped>
.bglog {
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color: rgb(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  height: 760px;
}
.logout-link {
  cursor: pointer;
  text-decoration: underline;
}
.main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-links {
  width: 30%;
  margin: 30px 20px;
  justify-content: space-around;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.inho {
  color: white;
}
.headin {
}
</style>
