// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDURNKiSJpCVmyvJEPVteNlzQlm7GOc3Cg",
  authDomain: "chatgpt-clone-e2b83.firebaseapp.com",
  projectId: "chatgpt-clone-e2b83",
  storageBucket: "chatgpt-clone-e2b83.appspot.com",
  messagingSenderId: "794071684920",
  appId: "1:794071684920:web:c2a670b61b4adb486613cd",
  measurementId: "G-6E21LKFHX8",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

// const analytics = getAnalytics(app);
