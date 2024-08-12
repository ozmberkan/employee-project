import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCywh75_PZGvl4HJ_ht-wBgc6btNrZFCdo",
  authDomain: "addemployee-fec4e.firebaseapp.com",
  projectId: "addemployee-fec4e",
  storageBucket: "addemployee-fec4e.appspot.com",
  messagingSenderId: "418832388522",
  appId: "1:418832388522:web:d6db86bccf595232dc1bd3",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
