<template>
  <div class="bg" style="background-image: url('4.jpg'); width: 100%">
    <div v-if="test" class="container" @submit.prevent="addData">
      <div class="d-flex h-100 sss">
        <div class="card">
          <div class="card-header justify-content-center">
            <h3>Get started to lockpick!</h3>
          </div>
          <div class="card-body">
            <form>
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
                  v-model="name"
                  type="text"
                  class="form-control"
                  placeholder="ชื่อ"
                />
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      class="bi bi-telephone-fill"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.267.98a1.636 1.636 0 0 1 2.448.152l1.681 2.162c.309.396.418.913.296 1.4l-.513 2.053a.636.636 0 0 0 .167.604L8.65 9.654a.636.636 0 0 0 .604.167l2.052-.513a1.636 1.636 0 0 1 1.401.296l2.162 1.681c.777.604.849 1.753.153 2.448l-.97.97c-.693.693-1.73.998-2.697.658a17.47 17.47 0 0 1-6.571-4.144A17.47 17.47 0 0 1 .639 4.646c-.34-.967-.035-2.004.658-2.698l.97-.969z"
                      /></svg
                  ></span>
                </div>
                <input
                  v-model="tel"
                  type="message"
                  class="form-control"
                  placeholder="เบอร์โทรติดต่อ"
                />
              </div>
              <select v-model="selected">
                <option disabled value="">โปรดเลือกหนึ่งอย่าง</option>
                <option>ติดตั้งครบวงจร</option>
                <option>ติดตั้งเฉพาะชิบโทรศัพท์</option>
                <option>ติดตั้งเฉพาะลายนิ้วมือ</option>
              </select>
              <div class="form-group">
                <nuxt-link to="">
                  <input
                    value="Submit"
                    type="submit"
                    class="btn float-right login_btn"
                    @click="addData"
                  />
                </nuxt-link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <button @click="getData">show</button>
    </div>

    <div v-else>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div class="hide">
        ชื่อผู้สมัคร : {{ names }} เบอร์โทรติดต่อ : {{ tels }} ระบบที่ติดตั้ง :
        {{ selecteds }} อีเมลผู้สมัคร : {{ emails }} เวลา :
        {{ timestamp }}
      </div>
      <nuxt-link to="/info">ย้อนกลับ ( back )</nuxt-link>
    </div>

    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
import firebase from 'firebase/app'
import { db } from '~/plugins/firebaseConfig.js'
export default {
  data() {
    return {
      name: '',
      tel: null,
      selected: '',
      email: '',
      names: '',
      tels: null,
      selecteds: '',
      emails: '',
      timestamp: '',
      test: true,
    }
  },
  methods: {
    mounted() {
      firebase.auth().onAuthStateChanged((user) => {
        console.log(user)
        this.email = user.email
      })
    },
    addData() {
      const data = {
        name: this.name,
        tel: this.tel,
        selected: this.selected,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        email: this.email,
      }
      db.collection('User')
        .doc('install')
        .set(data)
        .then(function () {
          console.log('Document install')
          alert('สำเร็จ!! เราจะติดต่อไปในเร็วๆ นี้')
        })
        .catch(function (error) {
          console.error('Error : ', error)
        })
    },
    getData() {
      db.collection('User')
        .doc('install')
        .onSnapshot((doc) => {
          const firebaseData = doc.data()
          if (firebaseData) {
            this.emails = firebaseData.email
            this.names = firebaseData.name
            this.selecteds = firebaseData.selected
            this.tels = firebaseData.tel
            this.timestamp = firebaseData.timestamp
            this.test = false
          }
        })
    },
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
  height: 100%;
}
.container {
  height: 100%;
  align-content: center;
}

.card {
  height: 320px;
  width: 400px;
  background-color: rgb(0, 0, 0) !important;
  display: flex;
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
.hide {
  text-align: center;
}
</style>
