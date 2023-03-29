// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ1EQRt4NdekvrhrtW4ufE6hmhEAaFOIM",
  authDomain: "furntiure-client.firebaseapp.com",
  projectId: "furntiure-client",
  storageBucket: "furntiure-client.appspot.com",
  messagingSenderId: "61671339351",
  appId: "1:61671339351:web:9d569528e7c73c83b3fa12",
  measurementId: "G-KFPVKZZ8GR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;