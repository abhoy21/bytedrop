// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8iux7JkmS-0cf32Nsy_N24AYpUDkl9uA",
  authDomain: "bytedrop-dd17f.firebaseapp.com",
  projectId: "bytedrop-dd17f",
  storageBucket: "bytedrop-dd17f.appspot.com",
  messagingSenderId: "490313653950",
  appId: "1:490313653950:web:0c55ab9828900ef03208ef",
  measurementId: "G-VRV7QZLES9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const datastore = getStorage(app);
export const db = getFirestore(app);
