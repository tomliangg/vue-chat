import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD9NnwgKQR6vLjr2OMtQ6HA5FAXU2qvEIs",
  authDomain: "vue-chat-7773c.firebaseapp.com",
  databaseURL: "https://vue-chat-7773c.firebaseio.com",
  projectId: "vue-chat-7773c",
  storageBucket: "vue-chat-7773c.appspot.com",
  messagingSenderId: "974369272505"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
