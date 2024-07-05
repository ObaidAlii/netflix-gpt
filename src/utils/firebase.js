// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmCXmJGrEUQL_GnUYbXOWzJhfN8nFKEh0",
  authDomain: "netflixgpt-961ac.firebaseapp.com",
  projectId: "netflixgpt-961ac",
  storageBucket: "netflixgpt-961ac.appspot.com",
  messagingSenderId: "193798299003",
  appId: "1:193798299003:web:b346ca4800af0b6c5971de",
  measurementId: "G-DH5J5ETBH3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
