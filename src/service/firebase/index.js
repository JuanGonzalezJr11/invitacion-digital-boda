import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQq8cp-WFbBVieLjW4if1dogFQOcxmlgM",
  authDomain: "bdinvitacionboda.firebaseapp.com",
  projectId: "bdinvitacionboda",
  storageBucket: "bdinvitacionboda.appspot.com",
  messagingSenderId: "868737513923",
  appId: "1:868737513923:web:2c7ed7188241bdc5006576"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);