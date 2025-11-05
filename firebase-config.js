<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { 
    getFirestore, collection, addDoc, getDocs, getDoc,
    updateDoc, deleteDoc, doc, query, where, orderBy 
  } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
  import { 
    getStorage, ref, uploadBytes, getDownloadURL, deleteObject 
  } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js";

  // ✅ Your Firebase Configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDIXyjs57ztJDN6_4-JIIyZpK3BtacVtMw",
    authDomain: "automobilix-2af84.firebaseapp.com",
    projectId: "automobilix-2af84",
    storageBucket: "automobilix-2af84.firebasestorage.app",
    messagingSenderId: "536651887423",
    appId: "1:536651887423:web:4f5065327e7cb155fa198a",
    measurementId: "G-EKFWGHZHQ7"
  };

  // ✅ Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // ✅ Initialize Firestore & Storage
  const db = getFirestore(app);
  const storage = getStorage(app);

  // ✅ Export All Firebase Utilities
  export { 
    db, storage, 
    collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc, query, where, orderBy,
    ref, uploadBytes, getDownloadURL, deleteObject 
  };
</script>
