import { Link } from 'react-router-dom';
import '../css/PorQueAhorrar.css';
import Quiz1 from '../components/Quiz1';

function PorQueAhorrar() {
    return (
        <section className="por-que-ahorrar-container">
            <div className="por-que-ahorrar">
                <div className="por-que-ahorrar-header">
                    <h2>¿Por qué es importante ahorrar?</h2>
                    <p>
                        Ahorrar es mucho más que guardar dinero: es construir oportunidades para tu futuro,
                        manejar imprevistos y acercarte a tus sueños personales y familiares.
                    </p>
                </div>

                <div className="por-que-ahorrar-content">


                    <div className="por-que-ahorrar-card">
                        <h3>Beneficios de ahorrar</h3>
                        <ul className="por-que-ahorrar-list">
                            <li>Seguridad financiera ante emergencias</li>
                            <li>Cumplimiento de metas y sueños</li>
                            <li>Reducción del estrés económico</li>
                            <li>Libertad para tomar mejores decisiones financieras</li>
                            <li>Construcción de patrimonio a largo plazo</li>
                        </ul>
                    </div>

                    <div className="por-que-ahorrar-card">
                        <h3>Razones más comunes por las que ahorrar</h3>
                        <ul className="por-que-ahorrar-list">
                            <li><strong>Emergencias:</strong> Para gastos inesperados como enfermedades o reparaciones.</li>
                            <li><strong>Metas personales:</strong> Cumplir sueños como viajar, estudiar o comprar un auto.</li>
                            <li><strong>Retiro o jubilación:</strong> Asegurar un futuro cómodo cuando dejemos de trabajar.</li>
                            <li><strong>Inversiones:</strong> Hacer crecer el dinero en negocios o proyectos.</li>
                            <li><strong>Tranquilidad financiera:</strong> Vivir sin preocupaciones económicas.</li>
                        </ul>
                    </div>

                    <div className="por-que-ahorrar-card">
                        <h3>¿Sabías que?</h3>
                        <ul className="por-que-ahorrar-list">
                            <li>El 60% de las personas no tienen un fondo de emergencia suficiente para cubrir imprevistos</li>
                            <li>Ahorrar el 10% de tus ingresos mensuales es un buen comienzo para construir un futuro sólido</li>
                            <li>Las personas que ahorran regularmente son 30% más propensas a tener estabilidad financiera a largo plazo</li>
                        </ul>
                    </div>

                    <div className="por-que-ahorrar-card">
                        <h3>Mitos y Realidades sobre el ahorro</h3>
                        <div className="myth-reality">
                            <p className="myth"><strong>Mito:</strong> "Solo se puede ahorrar si tienes mucho dinero."</p>
                            <p className="reality"><strong>Realidad:</strong> "Cualquiera puede empezar a ahorrar, incluso con pequeños montos."</p>
                        </div>
                        <div className="myth-reality">
                            <p className="myth"><strong>Mito:</strong> "Ahorrar es difícil y lleva mucho tiempo."</p>
                            <p className="reality"><strong>Realidad:</strong> "Ahorrar es un hábito que se puede construir con constancia, no tiene que ser complicado."</p>
                        </div>
                    </div>
                    <div className="por-que-ahorrar-quote">
                        <blockquote>
                            "No importa cuánto ganes, sino cuánto logras ahorrar para hacer realidad tus sueños."
                            <footer>- Sabiduría financiera</footer>
                        </blockquote>
                    </div>

                    <div className="por-que-ahorrar-video">
                        <h3>Descubre más en el siguiente video</h3>
                        <div className="video-wrapper">
                            <iframe
                                src="https://www.youtube.com/embed/OrUO7uD9uZo"
                                title="¿Por qué es importante ahorrar?"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="por-que-ahorrar-quiz">
                        <h3>¿Qué tanto sabes sobre el ahorro?</h3>
                        <Quiz1 />
                    </div>

                    <div className="por-que-ahorrar-cta">
                        <Link to="/temas/metodos" className="por-que-ahorrar-link">
                            Descubre métodos de ahorro
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PorQueAhorrar;