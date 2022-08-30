import './navbar.css';
import LogoNav from '../../img/logonav.svg';
import { useState } from 'react';

function Navbar() {

    const [active, setActive] = useState(false);

    return (
        <div className="nav">

            <div className='logonav'>
            <img src={LogoNav} alt='logo' width={90} height={90}/>
            </div>

            <ul className={active ? "links active" : "links"}>
                <li><a href="#"></a>Home</li>
                <li><a href="#"></a>Membros</li>
                <li><a href="#"></a>Login</li>

            </ul>

            <div className='menuHamburguer' onClick={() => { setActive(!active) }}>
                <span className='menuItem'></span>
                <span className='menuItem'></span>
                <span className='menuItem'></span>
            </div>

        </div>
    );
}

export default Navbar;