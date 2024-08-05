import './Nav.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo O blanco.png';

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
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/sobre-mi">Sobre Mi</Link></li>
                </ul>
            </div>
            <div className='boton'>
                <Link to="/Contacto">Obten una ilustración</Link>
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
