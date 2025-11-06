<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { 
    getFirestore, collection, addDoc, getDocs, getDoc,
    updateDoc, deleteDoc, doc, query, where, orderBy 
  } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";
  import { 
    getStorage, ref, uploadBytes, getDownloadURL, deleteObject 
  } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-analytics.js";

  // ✅ Correct Firebase Configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBtps5uPVUqIj-TNDV8nSvhdyCNgahCJts",
    authDomain: "sandstonebijoliya.firebaseapp.com",
    projectId: "sandstonebijoliya",
    storageBucket: "sandstonebijoliya.appspot.com",  // ✅ corrected
    messagingSenderId: "1043710716267",
    appId: "1:1043710716267:web:a366d53cd08e0b90c9042e",
    measurementId: "G-ZS66QQ7D7Z"
  };

  // ✅ Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

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
