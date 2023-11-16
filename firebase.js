// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx5zMM6sVMRKGGDQnrfXLD77InnYUVNp4",
  authDomain: "docsapp-cic.firebaseapp.com",
  databaseURL: "https://docsapp-cic-default-rtdb.firebaseio.com",
  projectId: "docsapp-cic",
  storageBucket: "docsapp-cic.appspot.com",
  messagingSenderId: "180995453014",
  appId: "1:180995453014:web:69f1d462af074393684bf7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

// export default firebaseApp;