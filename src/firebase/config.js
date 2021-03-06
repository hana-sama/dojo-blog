
import firebase from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCtwFNWZzHvHadT16A9iPTW8rbOkz1pqXw",
  authDomain: "udemy-vue-firebase-sites-48a25.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-48a25",
  storageBucket: "udemy-vue-firebase-sites-48a25.appspot.com",
  messagingSenderId: "1007832288458",
  appId: "1:1007832288458:web:ab29613b9c47ab696f3833"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }