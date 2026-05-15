import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDBqCDr8wQXPhpiSRjnq-q0wk6JGyZzVl8',
  authDomain: 'desafio3-final.firebaseapp.com',
  projectId: 'desafio3-final',
  storageBucket: 'desafio3-final.appspot.com',
  messagingSenderId: '322486019499',
  appId: '1:322486019499:web:ef93de530f8f232e1bdeee',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export default app;