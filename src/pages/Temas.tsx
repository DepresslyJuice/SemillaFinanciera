import { Link } from 'react-router-dom';
import '../css/temas.css';

function Temas() {
    return (
        <div className="temas-container">
            <section className="temas">
                <div className="temas-header">
                    <div className="temas-icon">📚</div>
                    <h2>Temas Disponibles</h2>
                    <p>Selecciona un tema para aprender más sobre el ahorro y la planificación financiera.</p>
                </div>

                <div className="temas-lista">
                    <div className="tema-item">
                        <div className="tema-icon">❓</div>
                        <div className="tema-content">
                            <h3>¿Por qué ahorrar?</h3>
                            <p>Conoce las razones fundamentales por las cuales deberías empezar a ahorrar.</p>
                            <ul className="tema-benefits">
                                <li>Seguridad financiera</li>
                                <li>Cumplimiento de metas</li>
                                <li>Independencia económica</li>
                            </ul>
                            <Link to="/temas/por-que-ahorrar" className="tema-link">
                                Ver más <span className="arrow">→</span>
                            </Link>
                        </div>
                        <div className="tema-decoration tema-decoration-1"></div>
                    </div>

                    <div className="tema-item">
                        <div className="tema-icon">💹</div>
                        <div className="tema-content">
                            <h3>Tipos de ahorro</h3>
                            <p>Explora los diferentes tipos de ahorro y cuál es el más adecuado para ti.</p>
                            <ul className="tema-benefits">
                                <li>Ahorro tradicional</li>
                                <li>Inversiones</li>
                                <li>Fondos de emergencia</li>
                            </ul>
                            <Link to="/temas/metodos" className="tema-link">
                                Ver más <span className="arrow">→</span>
                            </Link>
                        </div>
                        <div className="tema-decoration tema-decoration-2"></div>
                    </div>

                    <div className="tema-item">
                        <div className="tema-icon">📝</div>
                        <div className="tema-content">
                            <h3>Diseña tu presupuesto</h3>
                            <p>Aprende a crear un presupuesto eficiente para gestionar tus finanzas.</p>
                            <ul className="tema-benefits">
                                <li>Control de gastos</li>
                                <li>Planificación mensual</li>
                                <li>Herramientas digitales</li>
                            </ul>
                            <Link to="/temas/presupuesto" className="tema-link">
                                Ver más <span className="arrow">→</span>
                            </Link>
                        </div>
                        <div className="tema-decoration tema-decoration-3"></div>
                    </div>

                    <div className="tema-item">
                        <div className="tema-icon">💳</div>
                        <div className="tema-content">
                            <h3>Uso de Tarjetas</h3>
                            <p>Aprende a manejar tus tarjetas de crédito.</p>
                            <ul className="tema-benefits">
                                <li>Control de gastos</li>
                                <li>Planificación mensual</li>
                                <li>Herramientas digitales</li>
                            </ul>
                            <Link to="/temas/tarjetas" className="tema-link">
                                Ver más <span className="arrow">→</span>
                            </Link>
                        </div>
                        <div className="tema-decoration tema-decoration-4"></div>
                    </div>
                </div>

                <div className="temas-footer">
                    <p>Explora nuestros recursos y comienza tu camino hacia la libertad financiera</p>
                    <div className="temas-dots temas-dots-1"></div>
                    <div className="temas-dots temas-dots-2"></div>
                </div>
            </section>
        </div>
    );
}

export default Temas;