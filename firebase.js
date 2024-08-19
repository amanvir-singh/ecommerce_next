// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyBunEeWTS4RwT9bsYO8KfXdWS3bPEKEvIk",
    authDomain: "ecommerce-next-8fafc.firebaseapp.com",
    databaseURL: "https://ecommerce-next-8fafc-default-rtdb.firebaseio.com",
    projectId: "ecommerce-next-8fafc",
    storageBucket: "ecommerce-next-8fafc.appspot.com",
    messagingSenderId: "348819334367",
    appId: "1:348819334367:web:2319ffe09ae72fb126356a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {  app };