<template>
  <div class="container">
    <div class="d-flex justify-content-center sss">
      <div class="card">
        <div class="card-header justify-content-center">
          <h3>Login to lockpick!</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="pressed">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-people-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
                    /></svg
                ></span>
              </div>
              <input
                v-model="email"
                type="text"
                name="username"
                class="form-control"
                placeholder="e-mail"
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 16 16"
                    class="bi bi-key-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                    /></svg
                ></span>
              </div>
              <input
                v-model="password"
                type="password"
                name="password"
                class="form-control"
                placeholder="password"
              />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-dark">Login</button>
            </div>
            <p class="ee">
              No account ? <nuxt-link to="/register"><h>Register</h></nuxt-link>
            </p>

            <div v-if="error" class="error ee">{{ error.message }}</div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          this.$router.push('/info')
        })
        .catch((error) => (this.error = error))
    },
  },
}
</script>

<style>
.login1 {
  align-content: center;
  text-align: center;
}
.hh {
  margin-top: 30px;
}
.container {
  height: 100%;
  align-content: center;
  margin-top: -20px;
}

.card {
  height: 320px;
  width: 400px;
  background-color: rgb(0, 0, 0) !important;
  display: fixed;
}

.card-header h3 {
  margin-top: 5px;
  color: white;
  font-size: 150%;
}

.input-group-prepend span {
  width: 50px;
  background-color: #42403e;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.login_btn {
  color: rgb(255, 255, 255);
  background-color: #42403e;
  width: 80px;
  margin-top: 25px;
}

.login_btn:hover {
  color: black;
  background-color: white;
}

.links {
  color: white;
}
.sss {
  border: 1px solid;
  padding: 20px;
  box-shadow: 5px 5px #1b4b83;
}
.ee {
  margin-top: 10px;
  color: white;
}
</style>
