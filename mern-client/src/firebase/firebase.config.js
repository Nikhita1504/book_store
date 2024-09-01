// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPAbo5y2R2MrDCDcKqSI__nw6rDDuX1ns",
  authDomain: "mern-book-inventory-1840f.firebaseapp.com",
  projectId: "mern-book-inventory-1840f",
  storageBucket: "mern-book-inventory-1840f.appspot.com",
  messagingSenderId: "545213538829",
  appId: "1:545213538829:web:81f2d2a9b50c7534462b44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;