// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH5KqwuwgpZbRPC7y86BTKF1KOLmtOpoc",
  authDomain: "final-app-ce35c.firebaseapp.com",
  projectId: "final-app-ce35c",
  storageBucket: "final-app-ce35c.appspot.com",
  messagingSenderId: "980941109814",
  appId: "1:980941109814:web:9ea915ac89d8aab4b87697",
  measurementId: "G-2JXRJ5HW2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);