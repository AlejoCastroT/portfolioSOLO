import './Nav.css';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo O blanco.png';

function Nav() {
    const [isOpen, setIsOpen] = useState(() => {
        // Restaurar el estado del menú desde localStorage al iniciar
        const savedState = localStorage.getItem('navMenuState');
        return savedState !== null ? JSON.parse(savedState) : false;
    });

    const location = useLocation();

    useEffect(() => {
        // Guardar el estado del menú en localStorage cada vez que cambia
        localStorage.setItem('navMenuState', JSON.stringify(isOpen));
    }, [isOpen]);

    useEffect(() => {
        // Cerrar el menú al cambiar de ruta
        setIsOpen(false);
    }, [location]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='nav'>
            <div className='logo'>
                <Link to="/">
                    <img src={logo} alt="Logo" className="nav-logo" />
                </Link>
            </div>
            <div className={`lista ${isOpen ? 'open' : 'hidden'}`}>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/sobre-mi">Sobre Mi</Link></li>
                </ul>
            </div>
            <div className='boton'>
                <Link to="/contacto">Obten una ilustración</Link>
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
