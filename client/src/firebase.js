// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b6cb4.firebaseapp.com",
  projectId: "mern-blog-b6cb4",
  storageBucket: "mern-blog-b6cb4.appspot.com",
  messagingSenderId: "464288563350",
  appId: "1:464288563350:web:9eb5624621b7d2aa8f02b7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);