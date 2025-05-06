import '../css/GastosDeseos.css'; // Asegúrate de tener este archivo CSS
import NetIncomeCalculator from "../components/NetIncomeCalculator.tsx"; // Asume que el componente de la calculadora está en esta ruta

function GastosDeseos() {
    return (
        <section className="gastos-container">
            <div className="gastos"> {/* Contenedor principal para el layout */}

                <div className="gastos-card"> {/* Tarjeta 1: Jerarquía de Gastos */}
                    <h3>Jerarquización de Gastos</h3>

                    <div className="hierarchy-level"> {/* Nivel 1: Esencial */}
                        <h4>1. Gastos Esenciales</h4>
                        <p>Estos son los gastos absolutamente necesarios para tu supervivencia y bienestar básico. Cubrirlos debe ser siempre tu máxima prioridad.</p>
                        <ul> {/* Ejemplos más específicos */}
                            <li>Vivienda (alquiler, hipoteca, impuestos de propiedad)</li>
                            <li>Alimentación (comida básica y saludable)</li>
                            <li>Servicios básicos (electricidad, agua, gas, internet básico)</li>
                            <li>Transporte esencial (gasolina para ir al trabajo, pasaje de autobús)</li>
                            <li>Salud (seguro médico, visitas básicas al doctor, medicinas necesarias)</li>
                            <li>Educación fundamental (matrícula, libros indispensables)</li>
                        </ul>
                        <p className="consejo">
                            <strong>Consejo Clave:</strong> Revisa estos gastos regularmente para asegurarte de que no superen el 50-60% de tus ingresos netos. Si lo hacen, busca formas de reducirlos o aumentar tus ingresos.
                        </p>
                    </div>

                    <div className="hierarchy-level"> {/* Nivel 2: Importante */}
                        <h4>2. Gastos Importantes (Metas y Seguridad)</h4>
                        <p>Estos gastos no son de supervivencia inmediata, pero son cruciales para construir seguridad financiera a largo plazo y alcanzar tus metas futuras.</p>
                        <ul> {/* Ejemplos */}
                            <li>Fondo de emergencia (ahorro para imprevistos)</li>
                            <li>Ahorro para jubilación o inversiones a largo plazo</li>
                            <li>Pago de deudas (especialmente las de alto interés)</li>
                            <li>Seguros (vida, auto, casa, incapacidad)</li>
                            <li>Educación continua o desarrollo profesional</li>
                            <li>Mantenimiento preventivo (casa, auto)</li>
                        </ul>
                        <p className="consejo">
                            <strong>Prioridad:</strong> Intenta destinar al menos un 20% de tus ingresos netos a esta categoría. Considera automatizar tus ahorros y pagos de deuda.
                        </p>
                    </div>

                    <div className="hierarchy-level"> {/* Nivel 3: Deseado */}
                        <h4>3. Gastos Deseados (Estilo de Vida y Disfrute)</h4>
                        <p>Estos gastos están relacionados con el entretenimiento, el ocio, los hobbies y todo aquello que mejora tu calidad de vida pero no es estrictamente necesario para vivir.</p>
                        <ul> {/* Ejemplos */}
                            <li>Cenas y salidas a restaurantes/cafés</li>
                            <li>Entretenimiento (cine, conciertos, suscripciones de streaming, videojuegos)</li>
                            <li>Vacaciones y viajes</li>
                            <li>Ropa o gadgets de lujo no esenciales</li>
                            <li>Hobbies costosos</li>
                            <li>Suscripciones a gimnasios o clubes recreativos (si no son esenciales para la salud)</li>
                        </ul>
                        <p className="consejo">
                            <strong>Disfruta con Conciencia:</strong> Si tus gastos esenciales y tu ahorro están cubiertos, puedes asignar el resto (idealmente alrededor del 20-30%) a esta categoría. La clave es la moderación y no endeudarte por deseos.
                        </p>
                    </div>

                </div> {/* Fin Tarjeta 1 */}

                <div className="gastos-card"> {/* Tarjeta 2: Deseo vs Necesidad */}
                    <h3>Diferencia entre Deseo y Necesidad</h3>
                    <p>Comprender esta distinción es fundamental para tomar decisiones financieras conscientes y priorizar dónde va tu dinero.</p>

                    <div className="distinction-block">
                        <h4>¿Qué es una Necesidad?</h4>
                        <p>Es algo indispensable para tu supervivencia, seguridad y funcionamiento básico. Sin ello, tu salud, seguridad o capacidad de trabajar/estudiar se verían comprometidas.</p>
                        <ul> {/* Ejemplos con más contexto */}
                            <li>Comprar un coche <b>para ir a trabajar</b> si no hay transporte público viable (necesidad del coche, no necesariamente el modelo más caro).</li>
                            <li>Adquirir alimentos <b>básicos</b> para preparar comidas en casa.</li>
                            <li>Pagar una factura de <b>electricidad</b> para tener luz y calefacción/aire acondicionado básico.</li>
                            <li>Comprar ropa <b>adecuada</b> para el clima y para ir al trabajo/estudiar.</li>
                        </ul>
                    </div>

                    <div className="distinction-block">
                        <h4>¿Qué es un Deseo?</h4>
                        <p>Es algo que te gustaría tener o hacer para mejorar tu comodidad, disfrute o estatus, pero que podrías vivir sin ello. Son cosas que te hacen la vida más agradable pero no son esenciales.</p>
                        <ul> {/* Ejemplos con más contexto */}
                            <li>Comprar un coche deportivo de lujo <b>cuando ya tienes uno funcional.</b></li>
                            <li>Cenar en <b>restaurantes caros</b> varias veces por semana.</li>
                            <li>Comprar el <b>último modelo de smartphone</b> apenas sale, aunque el tuyo funcione bien.</li>
                            <li>Adquirir ropa <b>de marca costosa</b> solo por la etiqueta.</li>
                            <li>Viajar a destinos <b>exóticos</b> sin tener un ahorro sólido.</li>
                        </ul>
                    </div>

                    <div className="distinction-block">
                        <h4>¿Por qué es Crucial Distinguir?</h4>
                        <p>Distinguir entre deseos y necesidades te permite:</p>
                        <ul>
                            <li>Tomar decisiones de gasto más racionales y menos emocionales.</li>
                            <li>Identificar dónde puedes recortar gastos cuando sea necesario.</li>
                            <li>Evitar la acumulación de deuda innecesaria.</li>
                            <li>Liberar recursos para tus metas financieras importantes (ahorro, inversión, pago de deudas).</li>
                        </ul>
                    </div>

                    <p className="consejo">
                        <strong>Pausa y Reflexiona:</strong> Antes de cualquier compra (especialmente las grandes), pregúntate: "¿Es esto algo que necesito para vivir o funcionar, o es algo que simplemente quiero?". Sé honesto contigo mismo.
                    </p>

                </div> {/* Fin Tarjeta 2 */}

                <div className="gastos-card"> {/* Tarjeta 3: Estrategias de Gestión (Nueva) */}
                    <h3>Estrategias Inteligentes para Gestionar Gastos</h3>
                    <p>Una vez que entiendes tus gastos y la diferencia entre deseos y necesidades, implementa estas estrategias para tomar el control:</p>

                    <div className="strategy-block">
                        <h4>1. Registra y Monitoriza tus Gastos</h4>
                        <p>El primer paso para controlar tu dinero es saber a dónde va. Utiliza una libreta, una hoja de cálculo, una aplicación móvil o una herramienta en línea para registrar cada gasto durante al menos un mes.</p>
                        <p className="consejo">
                            <strong>Revelador:</strong> Esto te mostrará un panorama real de tus hábitos de gasto e identificará áreas donde puedes ajustar.
                        </p>
                    </div>

                    <div className="strategy-block">
                        <h4>2. Crea y Sigue un Presupuesto</h4>
                        <p>Un presupuesto es un plan financiero. Te ayuda a asignar tus ingresos a categorías específicas (siguiendo la jerarquía: Esencial, Importante, Deseado) y te da permiso para gastar dentro de esos límites.</p>
                        <p className="consejo">
                            <strong>Tu Hoja de Ruta:</strong> Define cuánto puedes gastar en cada área basado en tus ingresos y metas. Revisa y ajusta tu presupuesto regularmente.
                        </p>
                    </div>

                    <div className="strategy-block">
                        <h4>3. Implementa la Regla del "Espera"</h4>
                        <p>Para compras no esenciales, especialmente las grandes, implementa una regla de espera (por ejemplo, 24 horas, una semana). Si después del período de espera sigues queriendo el artículo y encaja en tu presupuesto, cómpralo. A menudo, el deseo impulsivo desaparece.</p>
                        <p className="consejo">
                            <strong>Controla el Impulso:</strong> Esta simple técnica te ayuda a evitar compras de las que podrías arrepentirte después.
                        </p>
                    </div>

                    <div className="strategy-block">
                        <h4>4. Planifica tus Deseos</h4>
                        <p>No tienes que eliminar todos tus deseos, ¡solo gestionarlos! Identifica tus deseos más importantes (ej: vacaciones, nuevo gadget) y crea un plan de ahorro específico para ellos. Así, los disfrutas sin descarrilar tu estabilidad.</p>
                        <p className="consejo">
                            <strong>Disfruta sin Culpa:</strong> Ahorrar para tus deseos te permite disfrutarlos mucho más, sabiendo que no estás comprometiendo tus finanzas esenciales o tu futuro.
                        </p>
                    </div>

                </div> {/* Fin Tarjeta 3 */}


                <div className="calculadora-container"> {/* Contenedor de la Calculadora */}
                    <h2 className="calculadora-title">
                        Prueba la siguiente calculadora para conocer tu ingreso neto.
                    </h2>
                    <NetIncomeCalculator />
                </div> {/* Fin Contenedor de la Calculadora */}

            </div> {/* Fin .gastos */}
        </section>
    );
}

export default GastosDeseos;