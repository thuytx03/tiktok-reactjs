// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZPDA6PiFYf4GVw19-zCwWj_DUZBUxamg",
  authDomain: "tiktokclone-650d9.firebaseapp.com",
  projectId: "tiktokclone-650d9",
  storageBucket: "tiktokclone-650d9.appspot.com",
  messagingSenderId: "570597103586",
  appId: "1:570597103586:web:5dc94f1bef3b1ebb1a8bbb"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db=app.firestore()
export default db;