// Tengo que traer a firebase
import firebase from "firebase/app";

// Tengo que traer el servicio
import "firebase/firestore";

// Inicializar app
const firebaseConfig = {
  apiKey: "AIzaSyB8BqDLNt93zn_N-qZtZqj55l2ZRpw1kEI",
  authDomain: "pc-shop-coder-curto.firebaseapp.com",
  projectId: "pc-shop-coder-curto",
  storageBucket: "pc-shop-coder-curto.appspot.com",
  messagingSenderId: "989850747430",
  appId: "1:989850747430:web:c368e91f6f3e47fc679ce7",
  measurementId: "G-NL58ZLETNW"
};

const app = firebase.initializeApp(firebaseConfig);

// Export
export const firestore = firebase.firestore(app);
export const dataBase = app.firestore();
export function getFirestore(){
  return
}