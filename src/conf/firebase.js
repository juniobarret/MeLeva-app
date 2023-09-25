
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";

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

// Obtenha o objeto Firestore
const db = getFirestore(app);

// Obtenha o objeto de autenticação
export const auth = getAuth(app);


export { db };

