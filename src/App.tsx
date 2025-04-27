import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Temas from "./pages/Temas.tsx";
import WelcomeSection from "./pages/WelcomeSection.tsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<WelcomeSection />} />
                    <Route path="/temas" element={<Temas />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
