import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJa03uXyoEmvSMDytNBZ9pOHU3Iko0rnw",
  authDomain: "desafio3-39021.firebaseapp.com",
  projectId: "desafio3-39021",
  storageBucket: "desafio3-39021.firebasestorage.app",
  messagingSenderId: "514633651519",
  appId: "1:514633651519:web:2b767f485f75abd6666f8a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;