// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // Tuve la intenciónde utilizar el .env para las variables, sin embargo en consola reporta un error, según lo que investigue es un error propio de la version beta 9 de firebase por lo que la única solución es poner las claves tal cual.
  apiKey: "AIzaSyDRACIxSl6bTy-8aNPwdk0JMMmhdCrmZ88",
  authDomain: "natgeo-db.firebaseapp.com",
  projectId: "natgeo-db",
  storageBucket: "natgeo-db.appspot.com",
  messagingSenderId: "1082568211277",
  appId: "1:1082568211277:web:fb0c3b1ebcc72475c61504",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
