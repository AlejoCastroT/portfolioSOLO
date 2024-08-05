import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from '../src/components/Nav/Nav';
import Home from '../src/pages/Home';
import Contacto from '../src/pages/Contacto';
import SobreMi from '../src/pages/SobreMi';
import Ilustraciones from '../src/pages/Ilustraciones';
import Galeria from '../src/pages/Galeria';

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/sobre-mi" element={<SobreMi />} />
                <Route path="/Ilustraciones" element={<Ilustraciones />} />
                <Route path="/galeria" element={<Galeria />} />
            </Routes>
        </Router>
    );
}

export default App;
