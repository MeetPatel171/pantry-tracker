// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpvXgbjiLIlHvgy0dtWoGO5V1Cx9Wio-0",
  authDomain: "pantry-tracker-ebff5.firebaseapp.com",
  projectId: "pantry-tracker-ebff5",
  storageBucket: "pantry-tracker-ebff5.appspot.com",
  messagingSenderId: "149201605928",
  appId: "1:149201605928:web:6fe477faf36df609ffec1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const firestore = getFirestore(app)

export{firestore}