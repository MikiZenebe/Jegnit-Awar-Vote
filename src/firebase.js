// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzplOhrBtaXZbq07eC-U9w4BpYFVh2niA",
  authDomain: "jegnit-award-voting.firebaseapp.com",
  databaseURL: "https://jegnit-award-voting-default-rtdb.firebaseio.com",
  projectId: "jegnit-award-voting",
  storageBucket: "jegnit-award-voting.firebasestorage.app",
  messagingSenderId: "613060012821",
  appId: "1:613060012821:web:571edb7fb95248b318571c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
