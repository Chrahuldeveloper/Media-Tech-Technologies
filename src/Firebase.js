import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR0pdTB6fbtYlTd7ASNjCOxiOcVtoe3NE",
  authDomain: "mediatech-2a4f8.firebaseapp.com",
  projectId: "mediatech-2a4f8",
  storageBucket: "mediatech-2a4f8.appspot.com",
  messagingSenderId: "760177884201",
  appId: "1:760177884201:web:72efaa49af205aa773b038",
  measurementId: "G-XFG0W3D3NG"
};

const app = initializeApp(firebaseConfig);
const db =  getFirestore(app)

export { db}