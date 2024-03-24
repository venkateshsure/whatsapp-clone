import { initializeApp } from "firebase/app";
import { getFirestore, } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
        apiKey: "AIzaSyC57NWjPNZZJ1YlEbZ1W6Ce_ZSnLgoit2Y",
        authDomain: "whatsappclone-455ba.firebaseapp.com",
        projectId: "whatsappclone-455ba",
        storageBucket: "whatsappclone-455ba.appspot.com",
        messagingSenderId: "382318570653",
        appId: "1:382318570653:web:b553203f113836cd673874"
      };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, db };