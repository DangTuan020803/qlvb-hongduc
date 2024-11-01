// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDZ59f2qBYqp8-M4f1n1U7aNEIFjknQEG8",
  authDomain: "qlvb-hongduc.firebaseapp.com",
  projectId: "qlvb-hongduc",
  storageBucket: "qlvb-hongduc.appspot.com",
  messagingSenderId: "675124828548",
  appId: "1:675124828548:web:922013c78183c18782e5d1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
auth.languageCode = "vi";
