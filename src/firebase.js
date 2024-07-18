import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVJ52E1DJFrBEZXu0_i5wx68In--_GLTE",
  authDomain: "employee-64317.firebaseapp.com",
  projectId: "employee-64317",
  storageBucket: "employee-64317.appspot.com",
  messagingSenderId: "933488741337",
  appId: "1:933488741337:web:4392604af82ac4adc067c8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { createUserWithEmailAndPassword };
