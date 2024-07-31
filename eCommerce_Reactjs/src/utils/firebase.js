import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
const firebaseConfig = {
  apiKey: "AIzaSyDKTy5Sky3mFr8bmG9jdWDRq02mOb0wG7I",
  authDomain: "ecomchat-b2f82.firebaseapp.com",
  projectId: "ecomchat-b2f82",
  storageBucket: "ecomchat-b2f82.appspot.com",
  messagingSenderId: "929575251798",
  appId: "1:929575251798:web:632d19ae9cd57766fef0f7",
  measurementId: "G-NGC1S8Q3CX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
export default firebase;
export const authentication = getAuth(initializeApp(firebaseConfig))
