import { initializeApp } from "firebase/app";
import {
  signOut,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//////////////////////////////////////////////////
//////////////Firebase Config/////////////////////
//////////////////////////////////////////////////
const firebaseConfig = {
  apiKey: "AIzaSyDIC9YMzEd73uCdwTPEXCaojVeuLphErQc",
  authDomain: "e-commerce-demo-a895f.firebaseapp.com",
  projectId: "e-commerce-demo-a895f",
  storageBucket: "e-commerce-demo-a895f.appspot.com",
  messagingSenderId: "541295277763",
  appId: "1:541295277763:web:82b02c6235233662ef1476",
};
///////////////////////////////////////////////
////////////////Firebase Auth//////////////////
///////////////////////////////////////////////
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

//////////////////////////////////////////////
//////////////////////////////////////////////
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error("Please Check your credentials", err.message);
  }
};

///////////////////////////////////////////////
/////////////Firestore////////////////////////
//////////////////////////////////////////////
const db = getFirestore();

const createUsersDoc = async (userAuth) => {
  if (!userAuth) return;
  try {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
    /////////////Creating Docs in db///////////////
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      } catch (err) {
        console.log("error creating user", err.message);
      }
    }

    return userDocRef;
  } catch (err) {
    console.log(err.message);
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutuser = async () => signOut(auth);

export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
export { app, auth, db, createUsersDoc, signInWithGooglePopup };
