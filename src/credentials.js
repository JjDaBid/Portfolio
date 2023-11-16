// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getApps } from "firebase/app";
import { getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx5zMM6sVMRKGGDQnrfXLD77InnYUVNp4",
  authDomain: "docsapp-cic.firebaseapp.com",
  projectId: "docsapp-cic",
  storageBucket: "docsapp-cic.appspot.com",
  messagingSenderId: "180995453014",
  appId: "1:180995453014:web:69f1d462af074393684bf7"
};

// Initialize Firebase
const appFirebase = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export default appFirebase