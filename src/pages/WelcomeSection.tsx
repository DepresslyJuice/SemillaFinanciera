
// Componente mejorado:
import { useNavigate } from 'react-router-dom';
import '../css/WelcomeSection.css';
import alcanciaSvg from '../assets/Alcancia.svg'; // Importación correcta de la imagen

function WelcomeSection() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/temas');
    };

    return (
        <div className="welcome-container">
            <section className="welcome">
                <div className="welcome-header">
                    <div className="welcome-icon">💰</div>
                    <h2>¡Bienvenido a tu espacio de Finanzas Inteligentes!</h2>
                </div>

                <div className="welcome-content">
                    <div className="welcome-text">
                        <p>
                            Adquirir el hábito de ahorrar y realizar una adecuada planificación financiera contribuye a
                            lograr un futuro estable y alcanzar metas personales. Un buen presupuesto permite organizar
                            los ingresos y gastos, controlar las deudas y tomar decisiones financieras más acertadas.
                            Este hábito no solo mejora la calidad de vida, sino que también brinda mayor seguridad financiera.
                        </p>

                        <blockquote>
                            "Planifica, ahorra y conquista tus metas. ¡Tú puedes lograrlo!"
                        </blockquote>
                    </div>

                    <div className="image-container">
                        <div className="image-decoration"></div>
                        <img src={alcanciaSvg} alt="Alcancía" />
                        <div className="coin coin-1">💲</div>
                        <div className="coin coin-2">💲</div>
                        <div className="coin coin-3">💲</div>
                    </div>
                </div>

                <div className="welcome-features">
                    <div className="feature">
                        <div className="feature-icon">📊</div>
                        <h3>Planificación</h3>
                        <p>Aprende a crear un plan financiero efectivo</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">💸</div>
                        <h3>Ahorro</h3>
                        <p>Descubre estrategias para ahorrar eficientemente</p>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">🎯</div>
                        <h3>Metas</h3>
                        <p>Define y alcanza tus objetivos financieros</p>
                    </div>
                </div>

                <button onClick={handleStart} className="cta-button">
                    Ver temas
                    <span className="button-arrow">→</span>
                </button>

                <div className="decoration-dots decoration-dots-1"></div>
                <div className="decoration-dots decoration-dots-2"></div>
            </section>
        </div>
    );
}


export default WelcomeSection;