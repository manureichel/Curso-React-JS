import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8qhBRZ_39M9cfXnVyRNGbLeWwG1Ck-9g",
  authDomain: "manu-store-c727f.firebaseapp.com",
  projectId: "manu-store-c727f",
  storageBucket: "manu-store-c727f.appspot.com",
  messagingSenderId: "405861783999",
  appId: "1:405861783999:web:2527a253a7342ec481690a",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
