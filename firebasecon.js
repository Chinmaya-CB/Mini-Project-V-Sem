// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCDCBfu5LYZGud93SFenPeddUBmhbl6Sc",
  authDomain: "mini-project-356e2.firebaseapp.com",
  databaseURL: "https://mini-project-356e2-default-rtdb.firebaseio.com",
  projectId: "mini-project-356e2",
  storageBucket: "mini-project-356e2.appspot.com",
  messagingSenderId: "728230895390",
  appId: "1:728230895390:web:c7f75116b6fa717233b30f",
  measurementId: "G-5WNC6P0BT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
export {app,analytics,db};