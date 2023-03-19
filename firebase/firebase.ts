import firebase from 'firebase/app';
import  'firebase/firestore';


// keys firebase
var firebaseConfig = {
  apiKey: "AIzaSyADaJY1-q5PWm8YAnpiMMeY5_Z4QwkG9UU",
  authDomain: "fb-crud-59df5.firebaseapp.com",
  projectId: "fb-crud-59df5",
  storageBucket: "fb-crud-59df5.appspot.com",
  messagingSenderId: "580752944203",
  appId: "1:580752944203:web:849da2516a38b202f471ce"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db= fb.firestore();



