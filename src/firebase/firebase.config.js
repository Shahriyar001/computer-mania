// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyCHrBJyoOyR76DXwhp6BRnnKRZmA63QBxQ",
    authDomain: "computer-mania-33da6.firebaseapp.com",
    projectId: "computer-mania-33da6",
    storageBucket: "computer-mania-33da6.appspot.com",
    messagingSenderId: "22593818481",
    appId: "1:22593818481:web:0ffc7f2a08817cf96070d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;