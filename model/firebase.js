// require('dotenv').config();

// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');
const { getFirestore } = require('firebase/firestore');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from 'firebase/firestore';
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVv6xzqfJ-eWsivDOQ2xVeXq6Nvp4EE6M",
    authDomain: "incraftworks-hackathon2022.firebaseapp.com",
    projectId: "incraftworks-hackathon2022",
    storageBucket: "incraftworks-hackathon2022.appspot.com",
    messagingSenderId: "344076067700",
    appId: "1:344076067700:web:7d2554429bedc7b94fc221",
    measurementId: "G-NN0RPFBXR1"
};

// Initialize Firebase and modules
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

// sign-up
module.exports.createAcc = async (email, password) => {
    let val = {};
    console.log("email: ", email, "pass: ", password);
    await createUserWithEmailAndPassword(auth, email, password)
        .then((credential) => {
            val.success=true;
            val.data=credential.user;
        })
        .catch((err) => {
            val.success = "false";
            val.error = err;
        })
    return val;
}