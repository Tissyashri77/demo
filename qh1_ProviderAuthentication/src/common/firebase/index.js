import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeRoZUJQwjwrBT3XEqcJALVbw0z2uOuec",
    authDomain: "qhtask.firebaseapp.com",
    projectId: "qhtask",
    storageBucket: "qhtask.appspot.com",
    messagingSenderId: "41768050367",
    appId: "1:41768050367:web:10c6144da89a691878700a"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db}