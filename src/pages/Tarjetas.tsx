import QuizTarjetas from '../components/QuizTarjetas';
import '../css/Tarjetas.css';
import Tarjeta from '../assets/Tarjeta.svg';

function Tarjetas() {
    return (
        <div className="tarjetas-container">
            <section className="tarjetas">
                <div className="tarjetas-header">
                    <h2>Tips que necesitas sobre las tarjetas de crédito</h2>
                </div>

                <div className="tarjetas-content">
                    <div className="tarjetas-text">
                        <p>
                            Las tarjetas de crédito son herramientas financieras poderosas que, si se usan de manera responsable,
                            pueden ofrecerte una gran flexibilidad y beneficios. Sin embargo, es importante entender cómo funcionan
                            y cómo manejarlas para evitar caer en deudas innecesarias.
                        </p>

                        <blockquote>
                            "Usa tus tarjetas de crédito con inteligencia y alcanza tus metas financieras"
                        </blockquote>
                    </div>

                    <div className="image-container">
                        <div className="image-decoration"></div>
                        <img src={Tarjeta} alt="Tarjeta de Crédito" />
                        <div className="coin coin-1">💲</div>
                        <div className="coin coin-2">💲</div>
                        <div className="coin coin-3">💲</div>
                    </div>
                </div>

                <div className="tarjetas-features">
                    <div className="feature">
                        <div className="feature-icon">🔑</div>
                        <h3>Beneficios</h3>
                        <p>Compra ahora, paga después y acumula recompensas con cada compra.</p>
                        <ul>
                            <li>Accede a promociones exclusivas y descuentos especiales.</li>
                            <li>Mejora tu historial crediticio si pagas a tiempo.</li>
                            <li>Obtén protección adicional en tus compras.</li>
                        </ul>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">⚠️</div>
                        <h3>Riesgos</h3>
                        <p>El interés puede acumularse rápidamente si no eres responsable con los pagos.</p>
                        <ul>
                            <li>Las deudas de tarjeta de crédito suelen tener tasas de interés muy altas.</li>
                            <li>Si no pagas el total de tu saldo, los intereses se aplican sobre el saldo restante.</li>
                            <li>El uso excesivo de la tarjeta puede afectar tu capacidad para ahorrar.</li>
                        </ul>
                    </div>
                    <div className="feature">
                        <div className="feature-icon">💡</div>
                        <h3>Consejos</h3>
                        <p>Evita pagar solo el mínimo y monitorea tus gastos para evitar caer en deudas.</p>
                        <ul>
                            <li>Paga siempre el saldo total cuando sea posible para evitar intereses.</li>
                            <li>Monitorea tus compras para mantenerte dentro del límite de crédito.</li>
                            <li>Compara tasas de interés y comisiones entre diferentes tarjetas de crédito.</li>
                            <li>Utiliza alertas de pago para no olvidar los plazos de vencimiento.</li>
                        </ul>
                    </div>
                </div>

                <div className="quiz-section">
                    <h3>¿Qué tanto sabes sobre el uso de las tarjetas de crédito?</h3>
                    <QuizTarjetas />
                </div>

                <div className="decoration-dots decoration-dots-1"></div>
                <div className="decoration-dots decoration-dots-2"></div>
            </section>
        </div>
    );
}

export default Tarjetas;
