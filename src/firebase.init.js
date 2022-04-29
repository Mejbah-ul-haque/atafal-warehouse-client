// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAaJb4gziho6Q-H1micPkLuzCpT__PFY0w",
    authDomain: "atafal-warehouse.firebaseapp.com",
    projectId: "atafal-warehouse",
    storageBucket: "atafal-warehouse.appspot.com",
    messagingSenderId: "232142832569",
    appId: "1:232142832569:web:1631189a83e38f2de8ec68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;