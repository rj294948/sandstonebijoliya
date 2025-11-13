// ✅ firebase-config.js

// Import Firebase SDK modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

// Firestore
import { 
  getFirestore, 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  doc, 
  deleteDoc, 
  updateDoc,
  where,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Auth
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged, 
  updateProfile 
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// Storage
import { 
  getStorage, 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-storage.js";

// ===== Firebase Config =====
const firebaseConfig = {
  apiKey: "AIzaSyDxNMhU09mINvq_aDLtylBg3FucCK-MzYE",
  authDomain: "sandstonebijoliya-293d2.firebaseapp.com",
  projectId: "sandstonebijoliya-293d2",
  storageBucket: "sandstonebijoliya-293d2.appspot.com",
  messagingSenderId: "133756247845",
  appId: "1:133756247845:web:8e769ce2af3db1765484cc",
  measurementId: "G-H7JMX9VNYF"
};

// ===== Initialize Firebase =====
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();

// ✅ Helper function — compress image before upload
async function compressImage(file, maxSizeMB = 0.9) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const scale = Math.sqrt((maxSizeMB * 1024 * 1024) / event.target.result.length);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(
          (blob) => resolve(new File([blob], file.name, { type: file.type })),
          file.type,
          0.8
        );
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  });
}

// ✅ Helper function — upload file & get download URL
async function uploadImageAndGetURL(file, folder = "uploads") {
  const compressedFile = file.size > 1048487 ? await compressImage(file) : file;
  const storageRef = ref(storage, `${folder}/${Date.now()}-${compressedFile.name}`);
  await uploadBytes(storageRef, compressedFile);
  return await getDownloadURL(storageRef);
}

// ===== Export everything =====
export {
  app,
  db,
  auth,
  storage,
  googleProvider,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  doc,
  deleteDoc,
  updateDoc,
  where,
  serverTimestamp,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  ref,
  uploadBytes,
  getDownloadURL,
  uploadImageAndGetURL // ✅ image upload helper
};
