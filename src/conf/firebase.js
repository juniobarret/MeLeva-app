// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmn4qOJkLKSB0QFLU26AWYHQYNx2agu2Q",
  authDomain: "meleva-c37a0.firebaseapp.com",
  projectId: "meleva-c37a0",
  storageBucket: "meleva-c37a0.appspot.com",
  messagingSenderId: "561569776455",
  appId: "1:561569776455:web:2b133a53680a50f60d4262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};