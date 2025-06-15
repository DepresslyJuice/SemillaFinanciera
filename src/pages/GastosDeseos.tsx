import '../css/GastosDeseos.css'; // Asegúrate de tener este archivo CSS
import NetIncomeCalculator from "../components/NetIncomeCalculator.tsx";
import vivienda from '../assets/vivienda.png';
import comida from '../assets/comida.png';
import servicios from '../assets/servicios.png';
import fondo from '../assets/fondo.png';
import deudas from '../assets/deudas.jpg';
import cenas from '../assets/cenas.png';
import entretenimiento from '../assets/entretenimiento.png';
import vacaciones from '../assets/vacaciones.png';
import alimentos from '../assets/alimentos.png';
import electricidad from '../assets/electricidad.png';
import restaurante from '../assets/restaurantes.png';
import smartphone from '../assets/smartphone.png';
import jubilacion from '../assets/jubilacion.jpg';

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
                            <img src={vivienda} alt="Logo Institución Innova" />
                            <li>Alimentación (comida básica y saludable)</li>
                            <img src={comida} alt="Logo Institución Innova" />
                            <li>Servicios básicos (electricidad, agua, gas, internet básico)</li>
                            <img src={servicios} alt="Logo Institución Innova" />
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
                            <img src={fondo} alt="Logo Institución Innova" />
                            <li>Ahorro para jubilación o inversiones a largo plazo</li>
                            <img src={jubilacion} alt="jubilacion" />
                            <li>Pago de deudas (especialmente las de alto interés)</li>
                            <img src={deudas} alt="Logo Institución Innova" />
                        </ul>
                    </div>

                    <div className="hierarchy-level"> {/* Nivel 3: Deseado */}
                        <h4>3. Gastos Deseados (Estilo de Vida y Disfrute)</h4>
                        <p>Estos gastos están relacionados con el entretenimiento, el ocio, los hobbies y todo aquello que mejora tu calidad de vida pero no es estrictamente necesario para vivir.</p>
                        <ul> {/* Ejemplos */}
                            <li>Cenas y salidas a restaurantes/cafés</li>
                            <img src={cenas} alt="Logo Institución Innova" />
                            <li>Entretenimiento (cine, conciertos, suscripciones de streaming, videojuegos)</li>
                            <img src={entretenimiento} alt="Logo Institución Innova" />
                            <li>Vacaciones y viajes</li>
                            <img src={vacaciones} alt="Logo Institución Innova" />
                        </ul>
                        <p className="consejo">
                            <strong>Disfruta con Conciencia:</strong> Si tus gastos esenciales y tu ahorro están cubiertos, puedes asignar el resto (idealmente alrededor del 20-30%) a esta categoría. La clave es la moderación y no endeudarte por deseos.
                        </p>
                    </div>

                </div> {/* Fin Tarjeta 1 */}

                <div className="gastos-card">
                    <h3>Diferencia entre Deseo y Necesidad</h3>
                    <p>Comprender esta distinción es fundamental para tomar decisiones financieras conscientes y priorizar dónde va tu dinero.</p>

                    <div className="distinction-block">
                        <h4>¿Qué es una Necesidad?</h4>
                        <p>Es algo indispensable para tu supervivencia, seguridad y funcionamiento básico. Sin ello, tu salud, seguridad o capacidad de trabajar/estudiar se verían comprometidas.</p>
                        <ul>
                            <li>Adquirir alimentos <b>básicos</b> para preparar comidas en casa.</li>
                            <img src={alimentos} alt="Logo Institución Innova" />
                            <li>Pagar una factura de <b>electricidad</b> para tener luz y calefacción/aire acondicionado básico.</li>
                            <img src={electricidad} alt="Logo Institución Innova" />
                        </ul>
                    </div>

                    <div className="distinction-block">
                        <h4>¿Qué es un Deseo?</h4>
                        <p>Es algo que te gustaría tener o hacer para mejorar tu comodidad, disfrute o estatus, pero que podrías vivir sin ello. Son cosas que te hacen la vida más agradable pero no son esenciales.</p>
                        <ul> {/* Ejemplos con más contexto */}
                            <li>Cenar en <b>restaurantes caros</b> varias veces por semana.</li>
                            <img src={restaurante} alt="Logo Institución Innova" />
                            <li>Comprar el <b>último modelo de smartphone</b> apenas sale, aunque el tuyo funcione bien.</li>
                            <img src={smartphone} alt="Logo Institución Innova" />
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

                </div> {/* Fin Tarjeta 2 */}

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