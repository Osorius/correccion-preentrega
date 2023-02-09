//la funcion initializeApp sirve para establecer una conexion con firebase
import { initializeApp } from "firebase/app";
import { getFirestore , collection } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAbeAx8lV-prXnjVEvsLWY-SwD9Y6bCFzY",
    authDomain: "entrega-final-c394e.firebaseapp.com",
    projectId: "entrega-final-c394e",
    storageBucket: "entrega-final-c394e.appspot.com",
    messagingSenderId: "524358723607",
    appId: "1:524358723607:web:96bfed7743ce972edf9452"
  };

const app = initializeApp(firebaseConfig) //FirebaseApp
const db = getFirestore(app) //Firestore
export const productsCollection = collection(db,"Hongos") // CollectionReference/Query
export const ventasCollection = collection(db,"ventas") // CollectionReference/Query

//1- ir a la pagina de firebase : npm i firebase
//2- me logueo : initializeApp(configObject)
//3- accedo a la base de datos : getFirestor(FirebaseApp)
//4- accedo a la coleccion que quiero operar : collection(Firestore,string)