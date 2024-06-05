
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Credenciales de Fire Base
const firebaseConfig = {
    apiKey: "AIzaSyDDmcorzeRMt6gHMt8ZrvuTL9GEKWSxY1I",
    authDomain: "pokestore-57750.firebaseapp.com",
    projectId: "pokestore-57750",
    storageBucket: "pokestore-57750.appspot.com",
    messagingSenderId: "329745713519",
    appId: "1:329745713519:web:0eba71dca29e3a9996809a"
  };
  
initializeApp(firebaseConfig);

const db=getFirestore()

export default db