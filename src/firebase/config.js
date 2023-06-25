// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//services
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX-8i4VexMQ8qqxnZM8nEI5gkir5RUHUE",
  authDomain: "aynsl-portfolio.firebaseapp.com",
  projectId: "aynsl-portfolio",
  storageBucket: "aynsl-portfolio.appspot.com",
  messagingSenderId: "693632697688",
  appId: "1:693632697688:web:4f265ba6a5ebfd27f9512d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


/* services */
//init firestore
export const db = getFirestore(app); 

//init storage
export const storage = getStorage(app);

//init auth
export const auth = getAuth(app);
