// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css';

function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <header className={`header-modern ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <a href="/">
                <div className="logo-container">
                    <div className="logo-icon">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
                            <path d="M12 2L3 9V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7891 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path className="coin" d="M12 15V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path className="coin-slot" d="M8 11V7C8 6.46957 8.21071 5.96086 8.58579 5.58579C8.96086 5.21071 9.46957 5 10 5H14C14.5304 5 15.0391 5.21071 15.4142 5.58579C15.7893 5.96086 16 6.46957 16 7V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h1>Semilla Financiera</h1>
                </div>
                </a>

                <button className={`menu-toggle ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
                        <li><Link to="/temas" className="nav-link" onClick={() => setMenuOpen(false)}>Temas</Link></li>
                        <li><Link to="/Contacto" className="nav-link" onClick={() => setMenuOpen(false)}>Contacto</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="floating-elements">
                <div className="floating-coin coin-1">$</div>
                <div className="floating-coin coin-2">$</div>
                <div className="floating-coin coin-3">$</div>
                <div className="floating-coin coin-4">¢</div>
                <div className="floating-coin coin-5">$</div>
            </div>
        </header>
    );
}

export default Header;
