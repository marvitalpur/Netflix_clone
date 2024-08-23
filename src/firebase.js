
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import getfirestore from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1NXtT48oRsk2InyyXKRl7LL1JHS72gHo",
  authDomain: "netflix-clone-e87bc.firebaseapp.com",
  projectId: "netflix-clone-e87bc",
  storageBucket: "netflix-clone-e87bc.appspot.com",
  messagingSenderId: "144911625178",
  appId: "1:144911625178:web:35541f78b553c768cc6ee3",
  measurementId: "G-SH6YZDZZ8H"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db= getfirestore(app)