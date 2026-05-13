// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeTH0O4txLNTNqHlRDP5mYouhUwoqb2sM",
    authDomain: "practice-9-10-module.firebaseapp.com",
    projectId: "practice-9-10-module",
    storageBucket: "practice-9-10-module.firebasestorage.app",
    messagingSenderId: "229386065347",
    appId: "1:229386065347:web:b2635ada1c3dd78e3c5976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);