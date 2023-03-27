import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyD6K3nohyJnyJd2N95QaOxjiyfhbOD0nD0",
    authDomain: "clone-e65ed.firebaseapp.com",
    projectId: "clone-e65ed",
    storageBucket: "clone-e65ed.appspot.com",
    messagingSenderId: "667646293992",
    appId: "1:667646293992:web:3b123a523414c90160d65d",
    measurementId: "G-W0BLHRF3F4"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const auth = getAuth(app)

export {auth}