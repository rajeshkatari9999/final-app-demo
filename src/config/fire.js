import React from 'react'
import firebase from 'firebase';
//import {storage,db} from 'firebase';

//import  'firebase/storage';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp ({
 
  apiKey: "AIzaSyDUBfQD2gcsth0dfO_zZ7-vpks1rIOEf-U",
  authDomain: "koolie-79d7d.firebaseapp.com",
  projectId: "koolie-79d7d",
  storageBucket: "koolie-79d7d.appspot.com",
  messagingSenderId: "1086482082836",
  appId: "1:1086482082836:web:f3e4f0072b1e6aad0d4b01",
  measurementId: "G-JY4N7LPSPX"
});

  
const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  


  export{db,auth,storage,};
