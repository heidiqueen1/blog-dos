// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpHqfrPhX3sSSj2Yw2PG9fQwDAk0Vl48Y",
  authDomain: "formulario-para-blog.firebaseapp.com",
  projectId: "formulario-para-blog",
  storageBucket: "formulario-para-blog.appspot.com",
  messagingSenderId: "174273770349",
  appId: "1:174273770349:web:cd81aa9360a46361906064",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db };