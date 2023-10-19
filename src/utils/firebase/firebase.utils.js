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

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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

////////////////////////////////////////////////
///////////Initiating Firebase App//////////////
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

///////////////////////////////////////////////////////
//////////////////////Firestore////////////////////////
///////////////////////////////////////////////////////
const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  productsToAdd,
  field = "title"
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  productsToAdd.forEach((product) => {
    const docRef = doc(collectionRef, product[field].toLowerCase());
    console.log(product);
    batch.set(docRef, product);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const que = query(collectionRef);

  const querySnapshot = await getDocs(que);
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

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

////////////////////////////////////////////////////////
///////////////////////Authentication///////////////////
////////////////////////////////////////////////////////
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutuser = async () => {
  window.localStorage.clear();
  return signOut(auth);
};

export const onAuthStateChangeListener = (callback) =>
  onAuthStateChanged(auth, callback);

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
export { app, auth, db, createUsersDoc, signInWithGooglePopup };
