import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
export const firebaseConfig = {
  apiKey: "AIzaSyBmkSSx3zmQ6EgvW7l8ndl4h1KOJPOMciw",
  authDomain: "validation-cca66.firebaseapp.com",
  databaseURL: "https://validation-cca66-default-rtdb.firebaseio.com",
  projectId: "validation-cca66",
  storageBucket: "validation-cca66.appspot.com",
  messagingSenderId: "591862092177",
  appId: "1:591862092177:web:28944b07ee2c2026a90a30",
  measurementId: "G-Z1KY5CKPW6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);