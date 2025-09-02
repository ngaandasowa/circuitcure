// Import the functions you need from the Firebase SDKs
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA9BBby_ysyPB4zyWGWD6e2_EpnrsLPhQE',
  authDomain: 'circuitcure-01.firebaseapp.com',
  projectId: 'circuitcure-01',
  storageBucket: 'circuitcure-01.appspot.com',
  messagingSenderId: '549088808321',
  appId: '1:549088808321:web:c52e908afdef9cd920ac80',
  measurementId: 'G-EZD9TG7HY5',
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and other services
export const auth = getAuth(app); // Auth instance
export const db = getFirestore(app); // Firestore instance
export const storage = getStorage(app); // Storage instance
export const googleProvider = new GoogleAuthProvider(); // Google Auth provider

