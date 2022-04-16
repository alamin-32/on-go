// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGADvlqxu2BjCCgWPQy2kc2F8KDxvZYvs",
  authDomain: "assignment-10-8e337.firebaseapp.com",
  projectId: "assignment-10-8e337",
  storageBucket: "assignment-10-8e337.appspot.com",
  messagingSenderId: "1020654908220",
  appId: "1:1020654908220:web:af92645d7117e9cb402439",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
