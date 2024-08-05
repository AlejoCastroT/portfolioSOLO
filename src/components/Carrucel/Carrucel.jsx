import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carrucel.css';

// Importa las imágenes
import publicidaImg from '../../assets/publicida.webp';
import caricaturaImg from '../../assets/caricatura.webp';
import ilustracionImg from '../../assets/ilustracion.webp';

const images = [
  publicidaImg,
  caricaturaImg,
  ilustracionImg,
];

function Carrucel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [isPaused, setIsPaused] = useState(false); // Estado para manejar la pausa
  const navigate = useNavigate(); // Hook para navegación

  useEffect(() => {
    // Pre-carga las imágenes de manera eficiente
    const promises = images.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(src);
        img.onerror = () => reject(src);
      });
    });

    Promise.all(promises)
      .then((results) => {
        // Duplicar imágenes para el efecto infinito
        setLoadedImages([...results, ...results]);
      })
      .catch((error) => console.error('Error loading images:', error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedImages.length);
      }
    }, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [isPaused, loadedImages.length]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % loadedImages.length);
    setIsPaused(true); // Pausa la animación al hacer clic en siguiente
    setTimeout(() => setIsPaused(false), 500); // Reanuda después de medio segundo
  }, [loadedImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + loadedImages.length) % loadedImages.length);
    setIsPaused(true); // Pausa la animación al hacer clic en anterior
    setTimeout(() => setIsPaused(false), 500); // Reanuda después de medio segundo
  }, [loadedImages.length]);

  const handleClick = () => {
    navigate('/galeria'); // Redirige a la página Galeria
  };

  return (
    <div className="carrucel">
      <div
        className={`carrucel-inner ${isPaused ? 'paused' : ''}`}
        style={{ transform: `translateX(-${(currentIndex / loadedImages.length) * 100}%)` }}
      >
        {loadedImages.map((image, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${image})` }}
            onClick={handleClick} // Añade el manejador de clic aquí
          ></div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>‹</button>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
}

export default Carrucel;
