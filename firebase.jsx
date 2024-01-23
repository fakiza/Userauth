// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeuAiRoHZi61trzRaOcxowuiRaoygjNb4",
  authDomain: "userauthentication-64e7b.firebaseapp.com",
  projectId: "userauthentication-64e7b",
  storageBucket: "userauthentication-64e7b.appspot.com",
  messagingSenderId: "103038595607",
  appId: "1:103038595607:web:3f810057284f69e8b5a252",
  measurementId: "G-XNRW3M50B4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// const analytics = getAnalytics(app);

