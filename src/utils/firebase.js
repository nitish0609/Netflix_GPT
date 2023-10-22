// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkwEQzJRoNEEiVwgzp7mvjeX6yb7jAj3w",
  authDomain: "netflixgpt-48014.firebaseapp.com",
  projectId: "netflixgpt-48014",
  storageBucket: "netflixgpt-48014.appspot.com",
  messagingSenderId: "563215308206",
  appId: "1:563215308206:web:36968ed460f5cb4b84a43f",
  measurementId: "G-1Q9WE6YKHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
