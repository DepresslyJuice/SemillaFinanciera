import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Temas from "./pages/Temas.tsx";
import WelcomeSection from "./pages/WelcomeSection.tsx";
import PorQueAhorrar from "./pages/PorQueAhorrar.tsx";
import MetodosAhorro from "./pages/MetodosAhorro.tsx";
import Tarjetas from "./pages/Tarjetas.tsx";
import Presupuesto from "./pages/Presupuesto.tsx";
import Contacto from "./pages/Contacto.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer";

import './App.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<WelcomeSection />} />
                    <Route path="/temas" element={<Temas />} />
                    <Route path="/temas/por-que-ahorrar" element={<PorQueAhorrar />} />
                    <Route path="/temas/Metodos" element={<MetodosAhorro />} />
                    <Route path="/temas/Presupuesto" element={<Presupuesto />} />
                    <Route path="/temas/Tarjetas" element={<Tarjetas />} />
                    <Route path="/Contacto" element={<Contacto />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
