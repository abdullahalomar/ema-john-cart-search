// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC87SqSMHiF-xaGmdr1N49eQZPYom0ewis",
  authDomain: "ema-john-simple-c68b0.firebaseapp.com",
  projectId: "ema-john-simple-c68b0",
  storageBucket: "ema-john-simple-c68b0.appspot.com",
  messagingSenderId: "352730924664",
  appId: "1:352730924664:web:cecff943d4e0733a128f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;