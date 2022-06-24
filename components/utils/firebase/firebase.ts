import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArAh2Ivvtpgg1ztMqa8mDZZG2Z6QCV1NA",
  authDomain: "mini-galaxy-cafe.firebaseapp.com",
  projectId: "mini-galaxy-cafe",
  storageBucket: "mini-galaxy-cafe.appspot.com",
  messagingSenderId: "413795619439",
  appId: "1:413795619439:web:5f508e247f9631015bb39a",
  measurementId: "G-6PDKX5WH6K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

export const auth = getAuth(app)