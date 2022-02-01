// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpWYXWeqXErHFiMUlbRB5R05yullFGd1E',
  authDomain: 'project-addiction-diamond.firebaseapp.com',
  projectId: 'project-addiction-diamond',
  storageBucket: 'project-addiction-diamond.appspot.com',
  messagingSenderId: '664008905400',
  appId: '1:664008905400:web:b0f4e70a61116748a09a4d',
  measurementId: 'G-E6TB0WYW1L',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
