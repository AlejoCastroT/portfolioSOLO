import './Nav.css';
import { useState } from 'react';

import logo from '../assets/logo O blanco.png';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className='nav'>
            <div className='logo'>
                <img src={logo} alt="Logo" className="nav-logo" />
            </div>
            <div className={`lista ${isOpen ? 'open' : 'hidden'}`}>
                <ul>
                    <li><a href="">Contacto</a></li>
                    <li><a href="">Sobre Mi</a></li>
                </ul>
            </div>
            <div className='boton'>
                <a href="">Obten una ilustración</a>
            </div>
            <button className='hamburger' onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>
        </nav>
    );
}

export default Nav;
