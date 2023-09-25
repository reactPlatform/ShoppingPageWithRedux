// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqMMy-oRotVeQ3fAy3GIWG1urvgmUKnMo",
  authDomain: "network-backend-call.firebaseapp.com",
  databaseURL: "https://network-backend-call-default-rtdb.firebaseio.com",
  projectId: "network-backend-call",
  storageBucket: "network-backend-call.appspot.com",
  messagingSenderId: "266244920319",
  appId: "1:266244920319:web:d1f5e8a1280a5ec009cdca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);