<template>
  <div
    class="container-fluid"
    style="background-image: url('4.jpg'); width: 100%"
  >
    <div overlay img-alt="Card Image" text-variant="white" title="Event">
      <vue-good-table :columns="columns" :rows="rows" />
    </div>
  </div>
</template>

<script>
// import the styles
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table'
import * as firebase from 'firebase/app'
import 'firebase/auth'

// add to component

export default {
  name: 'MyComponent',
  components: {
    VueGoodTable,
  },
  data() {
    return {
      columns: [
        {
          label: 'FirstName',
          field: 'fname',
        },
        {
          label: 'LastName',
          field: 'lname',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'City',
          field: 'city',
        },
        {
          label: 'Zipcode',
          field: 'zip',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MMM do yy',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        {
          id: 1,
          fname: 'John',
          lname: 'Lennon',
          age: 20,
          city: 'Chiangmai',
          zip: '50290',
          createdAt: '2020-11-2',
          score: 1,
        },
      ],
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      this.rows.fname = user.email
      this.rows.lname = user.uid
    })
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
  height: 1500px;
}
</style>
