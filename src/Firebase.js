//firebase
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


// firebase config
const firebaseConfig = {
    apiKey: "AIzaSyAv61SvJY5FHrxG3A3pwvZnnS4OjNrKXsQ",
    authDomain: "mussim-d-mandod.firebaseapp.com",
    projectId: "mussim-d-mandod",
    storageBucket: "mussim-d-mandod.appspot.com",
    messagingSenderId: "1020757331181",
    appId: "1:1020757331181:web:80c949e381a96b06b390e4",
    measurementId: "G-TS7GED5EQZ"
  };