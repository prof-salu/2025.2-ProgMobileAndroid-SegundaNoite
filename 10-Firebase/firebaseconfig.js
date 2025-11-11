import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Substitua pelas suas credencias do firebase
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SUA_API_KEY",
  projectId: "SUA_API_KEY",
  storageBucket: "SUA_API_KEY",
  messagingSenderId: "SUA_API_KEY",
  appId: "1:311320752931:web:ca72fc6cee4e8eb1791296",
  measurementId: "G-YK4PL2TJEV"
};
//Inicializa o firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);