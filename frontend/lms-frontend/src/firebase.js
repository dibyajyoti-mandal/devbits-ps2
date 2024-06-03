import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBKFRTaH0rdQDP3YZjJdyrcFqhQlvLYAjo",
  authDomain: "devbits-fe5f6.firebaseapp.com",
  projectId: "devbits-fe5f6",
  storageBucket: "devbits-fe5f6.appspot.com",
  messagingSenderId: "273029779060",
  appId: "1:273029779060:web:d3b964aeb2a1b4dd43cb21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;