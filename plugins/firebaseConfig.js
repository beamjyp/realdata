import firebase from 'firebase/app'
import 'firebase/firestore'

// Initialize Cloud Firestore through Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyDNe_k-rTUbN4g-KnQ8cRnQJRXH9kltLVM',
    authDomain: 'lockpick-fb244.firebaseapp.com',
    databaseURL: 'https://lockpick-fb244.firebaseio.com',
    projectId: 'lockpick-fb244',
    storageBucket: 'lockpick-fb244.appspot.com',
    messagingSenderId: '857565555397',
    appId: '1:857565555397:web:98c36c6dcb29c79d1f9eac',
  }
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
