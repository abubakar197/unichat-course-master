import firebase from "firebase/app";
import "firebase/auth";


export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyBby41dJsOfILrciwkA-falGIXP-SUp7Zs",
    authDomain: "corpchat-d2e34.firebaseapp.com",
    projectId: "corpchat-d2e34",
    storageBucket: "corpchat-d2e34.appspot.com",
    messagingSenderId: "364860709100",
    appId: "1:364860709100:web:f9a9705d07b84729d16dc9"
  }).auth();