import { initializeApp } from "firebase/app";
import { getFirestore, } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
 
    apiKey: "AIzaSyChuG0kwIdOGw68iquXl6gXi3ZvZDmx5dw",
    authDomain: "whatsapp-74247.firebaseapp.com",
    projectId: "whatsapp-74247",
    storageBucket: "whatsapp-74247.appspot.com",
    messagingSenderId: "220833010793",
    appId: "1:220833010793:web:a8a21840c7b5cd581cbef8",
    measurementId: "G-TELJEB67Q3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, db };