// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm70-MJuU9I6Xbn__TwD0GyM2Qje3KFt4",
  authDomain: "parallax-a2a85.firebaseapp.com",
  projectId: "parallax-a2a85",
  storageBucket: "parallax-a2a85.appspot.com",
  messagingSenderId: "1030243502578",
  appId: "1:1030243502578:web:1ae0055c4376588ae4036b",
  measurementId: "G-6MMGGXZX6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const storage = getStorage(app);