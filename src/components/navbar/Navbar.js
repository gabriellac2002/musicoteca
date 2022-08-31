import './navbar.css';
import LogoNav from '../../img/logonav.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {

    const [active, setActive] = useState(false);

    return (
        <div className="nav">

            <div className='logonav'>
            <img src={LogoNav} alt='logo' width={90} height={90}/>
            </div>

            <ul className={active ? "links active" : "links"}>
                <li><Link to="/" style={{ textDecoration: 'none', color: "#52DF55" }}>Home</Link></li>
                <li><Link to="/members" style={{ textDecoration: 'none', color: "#52DF55" }}>Membros</Link></li>
                <li><Link to="/login" style={{ textDecoration: 'none', color: "#52DF55" }}>Login</Link></li>

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