// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVbskEONEL0dycmkjDtd0Zsg2CEOyI4mE",
  authDomain: "kindable-285c9.firebaseapp.com",
  projectId: "kindable-285c9",
  storageBucket: "kindable-285c9.firebasestorage.app",
  messagingSenderId: "680261950380",
  appId: "1:680261950380:web:73dc82e715a1861757f809",
  measurementId: "G-363XN7BM13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);