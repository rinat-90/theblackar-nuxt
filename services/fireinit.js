import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

let config = {
  apiKey: "AIzaSyAarXSwTBc_HhdYliM5932B1L3QLgbEKp0",
  authDomain: "vuetify-cfb29.firebaseapp.com",
  databaseURL: "https://vuetify-cfb29.firebaseio.com",
  projectId: "vuetify-cfb29",
  storageBucket: "vuetify-cfb29.appspot.com",
  messagingSenderId: "230845894670",
  appId: "1:230845894670:web:9b9b403e540db560"
};


!firebase.apps.length ? firebase.initializeApp(config) : '';
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const auth = firebase.auth();
export const DB = firebase.database();
export const StoreDB = firebase.firestore();
export default firebase
