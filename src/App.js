import React, { useRef, useState } from 'react';
import './App.css';

//firebase
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


//navigation
import Home from './pages/Home';
import Principal from './pages/Principal';
import ErrorPage from './pages/Error';
import Pedidos from './pages/Pedidos';
import Criticas from './pages/Criticas';

import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const rotas = createBrowserRouter(
  [
    {path: '/', 
    element: <Principal/>,
    errorElement:<ErrorPage/>,
    children:[
      {path: '/', element: <Home/>},
      {path: '/pedidos', element: <Pedidos/>},
      {path: '/criticas', element: <Criticas/>}
    ]
  },
    
  ]
)

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

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  //FirebaseUser cliente = FirebaseAuth.getInstance().getCurrentUser();

//if (user != null) {
  
  return (
    
    <div className="App">
       
       <section>
        {user ? <RouterProvider router={rotas}/> : <SignIn />}
      </section>
      
      
    </div>
  );
}



function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in com Google</button>
      <p></p>
    </>
  )

}


export default App;
