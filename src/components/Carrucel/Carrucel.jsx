import  { useState } from 'react';
import img1 from '../../assets/publicida.webp';
import img2 from '../../assets/ilustracion.webp';
import img3 from '../../assets/caricatura.webp';
import './Carrucel.css'; // Asegúrate de importar los estilos CSS

function Carrucel() {
  const [index, setIndex] = useState(0);
  const images = [img1, img2, img3];

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="contenedor">
      <div className="contenedor-img" style={{ transform: `translateX(-${index * 100}vw)` }}>
        {images.map((img, i) => (
          <img key={i} src={img} alt={`imagen-${i}`} />
        ))}
      </div>
      {index > 0 && <div className="arrow left" onClick={prevImage}>‹</div>}
      {index < images.length - 1 && <div className="arrow right" onClick={nextImage}>›</div>}
    </div>
  );
}

export default Carrucel;
