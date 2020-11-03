<template>
  <div class="bg" style="background-image: url('4.jpg'); width: 100%">
    <div class="img2">
      <div style="background-image: url('4.jpg'); width: 100%">
        <div class="row">
          <div class="col">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 class="text1 font-weight-bold" style="color: white">
              THE BEST SECURITY FOR YOU
            </h1>
            <p class="text3 font-weight-bold" style="color: white">
              All you need <br />
              to protect your <br />the one you love.
            </p>
            <p class="text1" style="color: white">
              กำลังมองหาสิ่งที่จะช่วยให้คุณปกป้องจากภัยร้ายนอกบ้านอยู่ใช่ไหม?<br />
              ทดลองใช้ระบบรักษาความปลอดภัยของเรา
            </p>
            <b-button
              squared
              variant="light"
              size="lg"
              class="inbut font-weight-bold"
              @click="loginGoogle"
              ><p class="textG">GET STARTED</p>
            </b-button>
          </div>
          <div class="col slide"><About /></div>
        </div>
        <br />
        <div class="row">
          <div class="col nice">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/lg5WKsVnEA4"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col">
            <h1
              class="text2 font-weight-bold"
              style="color: white; margin-right: 37px"
            >
              THE BEST NO.1 SECURITY FROM NASA
            </h1>
            <p class="text3_1 font-weight-bold" style="color: white">
              Services care <br />
              for 24 hour <br />let's try it now!
            </p>
            <p class="text1 text2" style="color: white">
              ดูแลหลังการติดตั้งนานถึง 1 ปี<br />
              เปลี่ยนอุปกรณ์และบริการซ่อมราคาย่อมเยาว์
            </p>
          </div>
        </div>
        <p class="foot" style="color: white; background-color: black">
          Copyright &copy; 2020-2020 All rights reserved.
        </p>
      </div>
    </div>

    <!-- body -->
  </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
  methods: {
    loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const token = result.credential.accessToken
          // The signed-in user info.
          const user = result.user
          this.user = result.user
          // ...
          console.log('token : ' + token)
          console.log('user : ' + user)

          const userc = firebase.auth().currentUser
          let name, email, photoUrl, uid, emailVerified

          if (userc != null) {
            name = userc.displayName
            email = userc.email
            photoUrl = userc.photoURL
            emailVerified = userc.emailVerified
            uid = userc.uid
            console.log('ชื่อ' + name)
            console.log('email' + email)
            console.log('รูป' + photoUrl)
            console.log('สถานะ' + emailVerified)
            console.log('id' + uid)
            this.$router.replace('/Getstarted')
          } else {
            this.$router.replace('/')
          }
        })
        .catch(function (error) {
          // Handle Errors here.
          const errorCode = error.code
          const errorMessage = error.message
          // The email of the user's account used.
          const email = error.email
          // The firebase.auth.AuthCredential type that was used.
          const credential = error.credential
          // ...
          console.log('errorCode= ' + errorCode)
          console.log('errorMessage= ' + errorMessage)
          console.log('email= ' + email)
          console.log('credential' + credential)
        })
    },
  },
}
</script>

<style>
.bg {
  background-position: top; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain; /* Resize the background image to cover the entire container */
  background-color: rgb(0, 0, 0, 0.6);
  background-blend-mode: multiply;
  stroke-dashoffset: unset;
  height: auto;
}
.img1 {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.img2 {
  padding: 1px;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.6);
  background-blend-mode: multiply;
}
.text1 {
  text-align: left;
  margin-left: 20px;
  padding: 20px;
}
.text2 {
  text-align: right;
  margin-right: 22px;
}
.text3 {
  text-align: left;
  margin-left: 40px;
  font-size: 300%;
}
.text3_1 {
  text-align: right;
  margin-right: 37px;
  font-size: 300%;
}

.textG {
  margin-block: 5px;
}
.inbut {
  margin-left: 40px;
  font-size: 100%;
}
.test1 {
  margin-right: 250px;
  padding: 1px;
  justify-content: center;
}
.foot {
  text-align: right;
  font-weight: bold;
}
.slide {
  margin-right: 18px;
  margin-top: 75px;
}
.twoc {
  text-align: right;
}
.nice {
  margin-left: 40px;
}
</style>
