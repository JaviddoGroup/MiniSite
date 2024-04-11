// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_uzRUUEwNyXBuqi-yAql3xafyrx3YDOo",
    authDomain: "hellper-javiddo.firebaseapp.com",
    projectId: "hellper-javiddo",
    storageBucket: "hellper-javiddo.appspot.com",
    messagingSenderId: "946810225389",
    appId: "1:946810225389:web:28b34eb7e12337c2f8c2e4",
    measurementId: "G-B5J0NFLGG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);