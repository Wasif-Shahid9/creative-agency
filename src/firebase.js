import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAlX0VGNuOmykqXXJm7gh162ic4sy1Srk",
  authDomain: "creative-agency-4cad0.firebaseapp.com",
  projectId: "creative-agency-4cad0",
  storageBucket: "creative-agency-4cad0.appspot.com",
  messagingSenderId: "352559236494",
  appId: "1:352559236494:web:b7ae0f04d6a45adad490df",
  measurementId: "G-RTZS9Q3TNF",
  storageBucket: "gs://creative-agency-4cad0.appspot.com",
};

const app = initializeApp(firebaseConfig);
// const db = firebase.firestore();
export const storage = getStorage(app);
export const db = getFirestore(app);
