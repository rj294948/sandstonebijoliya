import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { 
  getFirestore, collection, addDoc, getDocs, getDoc,
  updateDoc, deleteDoc, doc, query, where, orderBy 
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIXyjs57ztJDN6_4-JIIyZpK3BtacVtMw",
  authDomain: "automobilix-2af84.firebaseapp.com",
  projectId: "automobilix-2af84",
  storageBucket: "automobilix-2af84.firebasestorage.app",
  messagingSenderId: "536651887423",
  appId: "1:536651887423:web:4f5065327e7cb155fa198a",
  measurementId: "G-EKFWGHZHQ7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc, query, where, orderBy };
