<template>
  <div class="bglog" style="background-image: url('4.jpg'); width: 100%">
    <div class="main">
      <div class="main-links">
        <div>
          <svg
            style="color: white; margin-right: 2px; margin-top: -2px"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-lfr"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
        <nuxt-link class="inho" to="/">HOME</nuxt-link>
        <div v-if="loggedIn" class="logout-link" @click="logout()">LOGOUT</div>
        <div v-else><Loginnew /></div>
        <nuxt-link class="inho" to="/info">INFO </nuxt-link>
        <div>
          <svg
            style="color: white; margin-left: 2px; margin-top: -2px"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 16 16"
            class="bi bi-arrow-right"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
import Cookies from 'js-cookie'
export default {
  data() {
    return {
      loggedIn: false,
    }
  },
  mounted() {
    this.setupFirebase()
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log('logged in')
          this.loggedIn = true
          firebase
            .auth()
            .currentUser.getIdToken(true)
            .then((token) => {
              Cookies.set('access_token', token)
            })
        } else {
          this.loggedIn = false
          Cookies.remove('access_token')
        }
      })
    },
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
<style>
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
  flex-direction: column;
}
.main-links {
  width: 30%;
  margin: 30px 20px;
  display: flex;
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
</style>
