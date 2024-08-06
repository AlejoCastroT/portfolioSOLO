import { useState } from 'react';
import './Contacto.css';
import { FaWhatsapp, FaInstagram, FaBehance } from 'react-icons/fa'; // Importa los íconos adicionales
import emailjs from 'emailjs-com';

function Contacto() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_kxzog0x', 'template_b2n6msv', e.target, 'dPuwJdHkNFPd-TQFy')
            .then((result) => {
                console.log(result.text);
                alert('Mensaje enviado con éxito');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            }, (error) => {
                console.log(error.text);
                alert('Error al enviar el mensaje');
            });
    };

    return (
        <div className="contacto">
            <div className="contacto-contenido">
                <h1>Contacto</h1>
                <div className="contacto-links">
                    <div className="contacto-link">
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <FaWhatsapp size={32} />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                    <div className="contacto-link">
                        <a href="https://www.instagram.com/companysolo/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={32} />
                            <span>Instagram</span>
                        </a>
                    </div>
                    <div className="contacto-link">
                        <a href="https://www.behance.net/felipegaitan1" target="_blank" rel="noopener noreferrer">
                            <FaBehance size={32} />
                            <span>Behance</span>
                        </a>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Tu email"
                        required
                    />
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tu mensaje"
                        required
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contacto;
