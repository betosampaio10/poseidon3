import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAJrg2_fLRE_oSPRXnEJK_Ggp9FJvEt9n0",
  authDomain: "poseidon-vaa.firebaseapp.com",
  databaseURL: "https://poseidon-vaa.firebaseio.com",
  projectId: "poseidon-vaa",
  storageBucket: "poseidon-vaa.appspot.com",
  messagingSenderId: "400439261155",
  appId: "1:400439261155:web:689bb9c8d12eb372c052d6"
  }

  firebase.initializeApp(firebaseConfig)

  export default firebase
