import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDnhOxTsaOK376l6pvZ0s6EbmKyvaLIb38",
    authDomain: "olx-clone-125bc.firebaseapp.com",
    projectId: "olx-clone-125bc",
    storageBucket: "olx-clone-125bc.appspot.com",
    messagingSenderId: "819642979482",
    appId: "1:819642979482:web:3be25e79102894d0f1bb23",
    measurementId: "G-3640Y6Q8WE"
  };

  export default  firebase.initializeApp(firebaseConfig)