import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyDBgBHGV3AXtQUFc2VlI2IupYMZoO-nKdU",
    authDomain: "sitse-4aa9f.firebaseapp.com",
    databaseURL: "https://sitse-4aa9f.firebaseio.com",
    projectId: "sitse-4aa9f",
    storageBucket: "sitse-4aa9f.appspot.com",
    messagingSenderId: "269306009899",
    appId: "1:269306009899:web:e509deedd762011d838d6e"
  };
  // Initialize Firebase
const FB = firebase.initializeApp(firebaseConfig);

const STORAGE = FB.storage ();
const DB = FB.firestore ();
const AUTH = FB.auth();

export { STORAGE, DB, FB, AUTH };
