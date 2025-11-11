import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//Substitua pelas suas credencias do firebase
const firebaseConfig = {
  apiKey: "AIzaSyAiUWo0riEmqPUqQDTsBebdoj7FsXse_mY",
  authDomain: "meuslembretesbarra.firebaseapp.com",
  projectId: "meuslembretesbarra",
  storageBucket: "meuslembretesbarra.firebasestorage.app",
  messagingSenderId: "311320752931",
  appId: "1:311320752931:web:ca72fc6cee4e8eb1791296",
  measurementId: "G-YK4PL2TJEV"
};
//Inicializa o firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);