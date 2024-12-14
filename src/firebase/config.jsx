import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7WLmKDy9_34D6XSLGEaYYDmIY4DtzkBk",
  authDomain: "unimar-devops.firebaseapp.com",
  projectId: "unimar-devops",
  storageBucket: "unimar-devops.firebasestorage.app",
  messagingSenderId: "961264844890",
  appId: "1:961264844890:web:95273ea30b7d7110269863",
  measurementId: "G-LTGD0JR5XW"
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)