import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPaX2rMJwB415LU3rjSVBFu9uA4dcOaig",
  authDomain: "e-commerce-d065f.firebaseapp.com",
  projectId: "e-commerce-d065f",
  storageBucket: "e-commerce-d065f.appspot.com",
  messagingSenderId: "319772189708",
  appId: "1:319772189708:web:74b2449d65ec4b0c39ba29",
  measurementId: "G-N2Y77MPVQB",
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user");
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const convertCollectionsSanpshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((returnObj, collection) => {
    returnObj[collection.title.toLowerCase()] = collection;
    return returnObj;
  }, {});
};

export const addCollectionAndDocuments = async (
  collecionKey,
  documentsToAdd
) => {
  const collectionRef = firestore.collection(collecionKey);

  const batch = firestore.batch();
  documentsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export default firebase;
