import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBpAJ3J0SDZcZmd8N_oqX2FWcbwYuD6LJY",
  authDomain: "vendettadao.firebaseapp.com",
  projectId: "vendettadao",
  storageBucket: "vendettadao.appspot.com",
  messagingSenderId: "1088495520081",
  appId: "1:1088495520081:web:edd05585550439c8d2ab70"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();