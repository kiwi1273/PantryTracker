// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {    
  apiKey: "AIzaSyCGrwf3_-q3nDNqRx4L3WUPTusYDKvzSnE",
  authDomain: "inventory-management-457a1.firebaseapp.com",
  projectId: "inventory-management-457a1",
  storageBucket: "inventory-management-457a1.appspot.com",
  messagingSenderId: "868701261334",
  appId: "1:868701261334:web:4367877a2d15a05bfeef37",
  measurementId: "G-WVWP60M658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore= getFirestore(app)

export {firestore} 
