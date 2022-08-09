// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCftWB3moAPX2__hxEyrj9VJqQJ666kAvo",
  authDomain: "rgzpetshop.firebaseapp.com",
  projectId: "rgzpetshop",
  storageBucket: "rgzpetshop.appspot.com",
  messagingSenderId: "1012496582348",
  appId: "1:1012496582348:web:c79b5f55b269b1f91c6469",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
