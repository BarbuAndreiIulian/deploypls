// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCbFXc8n0W0GFloS_beUPEABlKqYS5aoM",
  authDomain: "newinstav3-59a2e.firebaseapp.com",
  projectId: "newinstav3-59a2e",
  storageBucket: "newinstav3-59a2e.appspot.com",
  messagingSenderId: "1026929385351",
  appId: "1:1026929385351:web:1a3eeb602dfed47405fd22",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
