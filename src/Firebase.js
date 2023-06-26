// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZsj-OahSzG1ne0Ovs26yKNYc3qGwmzyc",
  authDomain: "invoice-741b9.firebaseapp.com",
  projectId: "invoice-741b9",
  storageBucket: "invoice-741b9.appspot.com",
  messagingSenderId: "693559010013",
  appId: "1:693559010013:web:10f83e281614bee070b134"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);