import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDySwCGYko63XorQGpbs3jYwvFzdWI9ltQ",
  authDomain: "cloud-doc-f3c10.firebaseapp.com",
  projectId: "cloud-doc-f3c10",
  storageBucket: "cloud-doc-f3c10.appspot.com",
  messagingSenderId: "890381900202",
  appId: "1:890381900202:web:05114f3d464d6df5b073d3",
  measurementId: "G-NNM4D65TXW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();