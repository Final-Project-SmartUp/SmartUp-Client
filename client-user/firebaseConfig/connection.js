import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcm63Fb4tRJ3VcRpfM-K--LRCf7jJq3Gs",
  authDomain: "smartup-ba538.firebaseapp.com",
  projectId: "smartup-ba538",
  storageBucket: "smartup-ba538.appspot.com",
  messagingSenderId: "649665150843",
  appId: "1:649665150843:web:7df5b26c165910eaa307de",
  measurementId: "G-RTJ0N4X69R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db