import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";
 

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAtLQ-cTMUVFYVal4jHj3JC5TL4Fc7yqUE",
  authDomain: "e-clo-shop-db.firebaseapp.com",
  projectId: "e-clo-shop-db"
});

export const db = getFirestore();


const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});

