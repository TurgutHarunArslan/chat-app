import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAD6xeH5ROJc-M6hb_bBdY7MAsSo8ThABI",
  authDomain: "chatting-ap-bb0bd.firebaseapp.com",
  databaseURL: "https://chatting-ap-bb0bd-default-rtdb.firebaseio.com",
  projectId: "chatting-ap-bb0bd",
  storageBucket: "chatting-ap-bb0bd.appspot.com",
  messagingSenderId: "847705611669",
  appId: "1:847705611669:web:54aaf3c045e137b8a9aa9c",
  measurementId: "G-98V58PE2ND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export {database};