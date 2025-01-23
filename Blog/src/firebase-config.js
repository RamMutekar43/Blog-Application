
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDioierSmjQ0aizbIDOGWMkydkLVUBsSK0",
  authDomain: "blog-2f84a.firebaseapp.com",
  projectId: "blog-2f84a",
  storageBucket: "blog-2f84a.firebasestorage.app",
  messagingSenderId: "658232169222",
  appId: "1:658232169222:web:967c9efdd32d8e3eb58487"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();