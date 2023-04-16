// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcnppSn-AKwXKvf1diBkiiLD_udn1QbuQ",
  authDomain: "blog-desing.firebaseapp.com",
  projectId: "blog-desing",
  storageBucket: "blog-desing.appspot.com",
  messagingSenderId: "543321712122",
  appId: "1:543321712122:web:50d1854c564f54f2713043"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);