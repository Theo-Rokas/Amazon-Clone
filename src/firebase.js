import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4jKumq4aizA7su3BC-nsA97b3LcxtuEg",
  authDomain: "clone-f3ee9.firebaseapp.com",
  databaseURL: "https://clone-f3ee9.firebaseio.com",
  projectId: "clone-f3ee9",
  storageBucket: "clone-f3ee9.appspot.com",
  messagingSenderId: "892959286831",
  appId: "1:892959286831:web:e53a4079f17358dfc1c8da",
  measurementId: "G-XXQYHJNWC2"
});

const auth = firebase.auth()

export { auth }