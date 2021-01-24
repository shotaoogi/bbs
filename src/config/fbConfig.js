import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBC-aV_v-mgtDrZsitxvZlVIvpu9buyZew",
  authDomain: "bbs-project-fb1b6.firebaseapp.com",
  projectId: "bbs-project-fb1b6",
  storageBucket: "bbs-project-fb1b6.appspot.com",
  messagingSenderId: "973962005365",
  appId: "1:973962005365:web:fcbaf50854755f57b6213c",
  measurementId: "G-6VY419FQ8N"
}

firebase.initializeApp(firebaseConfig);

firebase.firestore()

export default firebase;
