import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyB5Iwu1bR-tSmJdyXEya9qotDChq54FXkM",
  authDomain: "netflixclone2-aa0f3.firebaseapp.com",
  projectId: "netflixclone2-aa0f3",
  storageBucket: "netflixclone2-aa0f3.appspot.com",
  messagingSenderId: "1001330307807",
  appId: "1:1001330307807:web:89289f1ef52a8e2f056f6a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });
    console.log("User signed up successfully");
  } catch (error) {
    console.log(error);
    // alert("Error: " + error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("Login successful");
  } catch (error) {
    console.log(error);
    // alert("Error: " + error.message);
    toast.error(error.code).split("/")[1].split("-").join(" ")
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    console.log("Logout successful");
  } catch (error) {
    console.log(error);
    alert("Error: " + error.message);
  }
};

export { db, auth, login, signup, logout };
