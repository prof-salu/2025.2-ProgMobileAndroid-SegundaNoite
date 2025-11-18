import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Substitua pelas suas credencias do firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SUA_API_KEY",
  projectId: "SUA_API_KEY",
  storageBucket: "SUA_API_KEY",
  messagingSenderId: "SUA_API_KEY",
  appId: "SUA_API_KEY",
  measurementId: "SUA_API_KEY"
};
//Inicializa o firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);