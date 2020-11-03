import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyDNe_k-rTUbN4g-KnQ8cRnQJRXH9kltLVM',
  authDomain: 'lockpick-fb244.firebaseapp.com',
  databaseURL: 'https://lockpick-fb244.firebaseio.com',
  projectId: 'lockpick-fb244',
  storageBucket: 'lockpick-fb244.appspot.com',
  messagingSenderId: '857565555397',
  appId: '1:857565555397:web:98c36c6dcb29c79d1f9eac',
}

let app = null
if (!firebase.apps.length) {
  // eslint-disable-next-line no-unused-vars
  app = firebase.initializeApp(firebaseConfig)
}
export default firebase
export const db = firebase.firestore()
export const auth = firebase.auth()
