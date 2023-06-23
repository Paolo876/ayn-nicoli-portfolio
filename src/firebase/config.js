// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//services
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3zWOfLvikAl9OrdBnRlT3wDhy2sBq2B8",
  authDomain: "ayn-nicoli.firebaseapp.com",
  projectId: "ayn-nicoli",
  storageBucket: "ayn-nicoli.appspot.com",
  messagingSenderId: "65138164063",
  appId: "1:65138164063:web:eb4631ae0c24cea12cf6ea"
};

// Initialize Firebase
const  firebaseApp = initializeApp(firebaseConfig);


// init auth
export const auth = getAuth();
// init storage
export const storage = getStorage();
