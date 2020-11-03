<template>
  <div class="bg" style="background-image: url('4.jpg'); width: 100%">
    <div class="container headuser">
      <div class="d-flex justify-content-center sss">
        <div class="card">
          <div class="card-header justify-content-center">
            <h3>Welcome {{ user.email }}</h3>
          </div>
          <div class="card-body">
            <form>
              <ul>
                <li>
                  <nuxt-link to="/install">ติดตั้ง ( Install )</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/fix">แจ้งซ่อม ( Fix )</nuxt-link>
                </li>
                <li>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <nuxt-link to="/pagelogin">ย้อนกลับ ( Back )</nuxt-link>
                </li>
              </ul>
            </form>
          </div>
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
      user: '',
      img: null,
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.user = user
    })
  },
}
</script>

<style>
.bg {
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-color: rgb(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  height: 760px;
}
.container {
  height: 100%;
  align-content: center;
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
.headuser {
  margin-top: -50px;
}
</style>
