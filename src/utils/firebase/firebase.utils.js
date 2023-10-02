import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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
  login_hint: "user@example.com",
});
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const signInWithGooglePopup = () => signInWithPopup(auth, provider);
const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

///////////////////////////////////////////////
/////////////Firestore////////////////////////
//////////////////////////////////////////////
const db = getFirestore();

const createUsersDoc = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  ///////////////////////////////////////////////
  /////////////Creating Docs in db///////////////
  ///////////////////////////////////////////////

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
      console.log("error creating user", err);
    }
  }

  return userDocRef;
};

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
export {
  app,
  auth,
  signInWithGooglePopup,
  db,
  createUsersDoc,
  signInWithGoogleRedirect,
};
