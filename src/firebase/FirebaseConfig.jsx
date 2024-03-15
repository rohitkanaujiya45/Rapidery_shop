// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7RVTZatVQigs2srdXstBxnMC-XHzrsMM",
  authDomain: "myfirstapp-25cb8.firebaseapp.com",
  projectId: "myfirstapp-25cb8",
  storageBucket: "myfirstapp-25cb8.appspot.com",
  messagingSenderId: "3571318247",
  appId: "1:3571318247:web:d7582182d0a8d5a432d142"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const fireDb = getFirestore(app);
const auth = getAuth(app);
export {fireDB, auth,fireDb } 