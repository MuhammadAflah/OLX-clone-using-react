import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAdg63IH36LuLQXw9daENPagxgyVD9BuW4",
    authDomain: "olx-clone-3c4f7.firebaseapp.com",
    projectId: "olx-clone-3c4f7",
    storageBucket: "olx-clone-3c4f7.appspot.com",
    messagingSenderId: "249293809109",
    appId: "1:249293809109:web:07b4eaea06ffff9139c95c",
    measurementId: "G-7B9Q108J9J"
  };

export default firebase.initializeApp(firebaseConfig)