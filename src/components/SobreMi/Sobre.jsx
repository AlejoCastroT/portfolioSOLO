import './Sobre.css';
import fotoPerfil from '../../assets/fotoPerfil.webp';

function Sobre() {
    return (
        <div className="sobre">
            <div className="sobre-contenido">
                <div className="sobre-foto">
                    <img src={fotoPerfil} alt="Foto de perfil" />
                </div>
                <div className="sobre-descripcion">
                    <h1>Sobre Mí</h1>
                    <p>
                        <span className="intro-text">Hola, soy <span className="nombre-destacado">Felipe Gaitán</span></span><br />
                        <span className="titulo">Diseñador gráfico</span><br />
                        Mi nombre es Felipe, estudiante universitario especializado en la ilustración digital 2D, diseño editorial, diseño de personajes y caricaturas.
                        ¡Si estás interesado en algún diseño, no dudes en preguntar!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sobre;