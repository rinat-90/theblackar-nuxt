import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

let config = {
  apiKey: "AIzaSyBGpvolW9xnhfX96nbBwbDZP2vCvaq8omk",
  authDomain: "theblackar-c31f7.firebaseapp.com",
  databaseURL: "https://theblackar-c31f7.firebaseio.com",
  projectId: "theblackar-c31f7",
  storageBucket: "theblackar-c31f7.appspot.com",
  messagingSenderId: "902637824609",
  appId: "1:902637824609:web:562972c46763e673"
};

!firebase.apps.length ? firebase.initializeApp(config) : '';
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export const StoreDB = firebase.firestore();
export default firebase
