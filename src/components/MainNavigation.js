import {NavLink} from 'react-router-dom';
import estilos from './MainNavigation.module.css';

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



function MainNavigation(){
    const auth = firebase.auth();
    return(
        
        <header>
            <nav>
                <ul>
                <li>
                    <NavLink
                        to="/"
                        >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/pedidos"
                    >Pedidos</NavLink>
                </li>
                <li>
                    <NavLink to="/criticas"
                    >Criticas</NavLink>
                </li>
                <button onClick={() => auth.signOut()}>Sign Out</button>
                </ul>
                
            </nav>
            
        </header>
        
        
    )
}

export default MainNavigation;
