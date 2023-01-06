import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDkY_iIjsh-BXC1C_DwDyiabzzlTEPDy3Q",
    authDomain: "twitter-clone-e2c1a.firebaseapp.com",
    projectId: "twitter-clone-e2c1a",
    storageBucket: "twitter-clone-e2c1a.appspot.com",
    messagingSenderId: "750584033357",
    appId: "1:750584033357:web:b8ff1f749e53891d866c04",
    measurementId: "G-THSCJYS2F4"
  };
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export default db;