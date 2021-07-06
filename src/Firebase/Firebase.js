import firebase from 'firebase/app'
import "@firebase/firestore"

const app = firebase.initializeApp({
  apiKey: "AIzaSyBET4I7QZvROA5RAhBFfEongNZzhQ4zflE",
  authDomain: "udg-coderhouse.firebaseapp.com",
  projectId: "udg-coderhouse",
  storageBucket: "udg-coderhouse.appspot.com",
  messagingSenderId: "630521099899",
  appId: "1:630521099899:web:e9d7771a3a86c80c4214de",
});

 export function getFirebase() {
  return app;
}
export function getFireStore() {
  return firebase.firestore(app);
}
