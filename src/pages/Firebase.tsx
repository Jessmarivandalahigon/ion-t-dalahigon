// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsZW_zg7jSSRTYucnIRBRig5fb7yYsXiw",
    authDomain: "ion-t-dalahigon.firebaseapp.com",
    projectId: "ion-t-dalahigon",
    storageBucket: "ion-t-dalahigon.appspot.com",
    messagingSenderId: "147264952884",
    appId: "1:147264952884:web:4d25d8d89cf0ad98664861",
    measurementId: "G-L2J89KX38H"
  };


// Initialize Firebase

const firebaseApp = initializeApp(firebaseConfig);

// 
const db = getFirestore(firebaseApp);

export{db}