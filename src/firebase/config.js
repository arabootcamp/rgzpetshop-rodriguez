// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDij8oWw9Gar0HcvJI2n8gCWX3wOPuxrvc",
    authDomain: "project-react-73c17.firebaseapp.com",
    projectId: "project-react-73c17",
    storageBucket: "project-react-73c17.appspot.com",
    messagingSenderId: "1095719918379",
    appId: "1:1095719918379:web:c096359f61e23f4238436e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
