// ✅ firebase-config.js (Updated for Gmail Sign-In)
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { 
  getFirestore, collection, addDoc, getDocs, query, orderBy, doc, deleteDoc, updateDoc 
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged, 
  updateProfile 
} from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDxNMhU09mINvq_aDLtylBg3FucCK-MzYE",
  authDomain: "sandstonebijoliya-293d2.firebaseapp.com",
  projectId: "sandstonebijoliya-293d2",
  storageBucket: "sandstonebijoliya-293d2.appspot.com",
  messagingSenderId: "133756247845",
  appId: "1:133756247845:web:8e769ce2af3db1765484cc",
  measurementId: "G-H7JMX9VNYF"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider, collection, addDoc, getDocs, query, orderBy, doc, deleteDoc, updateDoc, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged, updateProfile };
