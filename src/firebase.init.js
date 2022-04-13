// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAfrqS4bD_gRTOnFWetg4RYan0-CzNY3vs",
    authDomain: "car-servies.firebaseapp.com",
    projectId: "car-servies",
    storageBucket: "car-servies.appspot.com",
    messagingSenderId: "245117842553",
    appId: "1:245117842553:web:8ee95ce198992e1c7990a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;