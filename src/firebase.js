// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPQ6I4zJe6yC96GYbkATvv0eP5SPSONmA",
  authDomain: "cubtopiapreschool.firebaseapp.com",
  projectId: "cubtopiapreschool",
  storageBucket: "cubtopiapreschool.firebasestorage.app",
  messagingSenderId: "172958119592",
  appId: "1:172958119592:web:dae481d6d5363cae50749d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);