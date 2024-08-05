import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Inicio.css';
import logo from '../../assets/logo completo b.png';

function Inicio() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hidenElements = document.querySelectorAll('.contenedor-inicio');
        hidenElements.forEach((el) => observer.observe(el));

        return () => {
            hidenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);

    return (
        <div className='inicio'>
            <div className='contenedor-inicio'>
                <img src={logo} alt="Logo" className='logo' />
                <h3>Bienvenidos</h3>
                <h1>¡Portafolio virtual!</h1>
                <Link to="/Ilustraciones">Explora</Link>
            </div>
        </div>
    );
}

export default Inicio;
