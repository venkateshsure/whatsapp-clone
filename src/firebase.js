import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBZlQZP8KVOZ1QNUS0m7XaQqEZwj3HLmFY",
  authDomain: "whatsapp-clone-2f943.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-2f943-default-rtdb.firebaseio.com",
  projectId: "whatsapp-clone-2f943",
  storageBucket: "whatsapp-clone-2f943.appspot.com",
  messagingSenderId: "573527895482",
  appId: "1:573527895482:web:290b4e0a9f998e3ed38183",
  measurementId: "G-2MZ4NEPMGF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { auth, provider, db };