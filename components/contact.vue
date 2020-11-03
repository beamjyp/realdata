<template>
  <div style="background-image: url('4.jpg'); width: 100%">
    <div class="container">
      <div class="d-flex justify-content-center h-100"></div>
      <div @submit.prevent="validate">
        <h1 style="font-size: 200%; color: white">แจ้งซ่อม</h1>
        <div class="form-group">
          <div role="group">
            <label style="color: white" for="input-live"
              >E-mail : {{ usern.email }}</label
            >
            <b-form-input
              id="input-live"
              v-model="name1"
              :state="nameState"
              aria-describedby="input-live-help input-live-feedback"
              placeholder="ชื่อผู้แจ้ง"
              trim
            ></b-form-input>

            <b-form-invalid-feedback id="input-live-feedback">
              Please Enter
            </b-form-invalid-feedback>
          </div>
        </div>

        <div class="form-group">
          <b-select
            id="input-live"
            v-model="se"
            class="custom-select"
            trim
            :state="SState"
          >
            <option value="">ระบบที่เสีย โปรดเลือก 1 อย่าง</option>
            <option value="1">ระบบแสกนลายนิ้วมือ</option>
            <option value="2">ระบบชิปโทรศัพท์</option>
            <option value="3">ทั้ง 2 ระบบ</option>
          </b-select>
          <b-form-invalid-feedback id="input-live-feedback">
            Please Select
          </b-form-invalid-feedback>
        </div>

        <div class="form-group">
          <b-form-datepicker
            id="example-datepicker"
            v-model="valued"
            class="mb-2"
            trim
            :state="Dates"
          ></b-form-datepicker>
          <b-form-invalid-feedback id="input-live-feedback">
            Please Select
          </b-form-invalid-feedback>
        </div>

        <b-form-textarea
          id="textarea"
          v-model="text2"
          class="mt-2"
          placeholder="รายละเอียดการแจ้งซ่อม"
          rows="3"
          max-rows="6"
        ></b-form-textarea>

        <h1 style="font-size: 200%; color: white">แนบรูป</h1>
        <b-form-file
          ref="file-input"
          v-model="fileimage"
          class="mb-2 mt-2"
        ></b-form-file>

        <div class="b">
          <b-button class="mr-2" @click="validate">Apply</b-button>
        </div>

        <nuxt-link to="/">ย้อนกลับ ( back )</nuxt-link>
      </div>
      <!-- body -->
    </div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
  computed: {
    nameState() {
      return this.name1.length > 0
    },
    SState() {
      return this.se.length > 0
    },
    Dates() {
      return this.valued.length > 0
    },
  },
  data() {
    return {
      name1: '',
      se: '',
      valued: '',
      fileimage: null,
      text: '',
      text2: '',
      value1: 0,
      usern: '',
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.usern = user
    })
  },
  methods: {
    validate() {
      const file = this.fileimage
      const storageRef = firebase.storage().ref()
      const metadata = {
        contentType: 'image/jpeg',
      }

      const uploadTask = storageRef
        .child('image/' + file.name)
        .put(file, metadata)

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          this.value1 = progress
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused')
              break
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running')
              break
          }
        },
        function (error) {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break

            case 'storage/canceled':
              // User canceled the upload
              break

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break
          }
        },
        function () {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL)
          })
        }
      )
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
.cong {
  margin-top: 50px;
}
.b {
  margin-top: 15px;
  margin-bottom: 25px;
}
</style>
