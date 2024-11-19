// src/firebaseConfig.js
// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJbSG1rYvBGJU0R1suTtTqK3MGIj1cTbg",
    authDomain: "questionpage-60daa.firebaseapp.com",
    projectId: "questionpage-60daa",
    storageBucket: "questionpage-60daa.firebasestorage.app",
    messagingSenderId: "792460976963",
    appId: "1:792460976963:web:4aca07004aa434128e05f6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Storage
export const storage = getStorage(app);











