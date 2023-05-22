import {Outlet} from 'react-router-dom';
import MainNavigation from "../components/MainNavigation.js"

function Principal(){
    return(
    <div>
    <MainNavigation/>
    <main>
        <Outlet/>
    </main>
    </div>)
}

export default Principal;