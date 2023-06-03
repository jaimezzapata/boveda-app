import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCC8LLIP45c0fsi5Lh13IIVaLfY4occIrU",
  authDomain: "crud-40558.firebaseapp.com",
  projectId: "crud-40558",
  storageBucket: "crud-40558.appspot.com",
  messagingSenderId: "859666479497",
  appId: "1:859666479497:web:d4ffdc7187c774e4438958"
};

const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app)