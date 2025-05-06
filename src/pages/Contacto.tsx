import Tarjeta from '../assets/Tarjeta.svg';
import '../css/Contacto.css'; // Importamos el archivo CSS

// Placeholder simple para el logo (podrías usar un <img src="..." /> real si tuvieras la imagen)
// import InstitucionLogo from '../assets/institucion-logo.svg'; // Ejemplo si tuvieras una imagen

function Contacto() {
    // Datos inventados para el ejemplo
    const institucion = {
        nombre: 'Mitad del Mundo',
        direccion: 'Av. Manuel Córdova Galaraza y Calle 21 de Marzo',
    };

    const creadores = [
        { nombre: 'Luis Loya' },
        { nombre: 'Danna Lemarie' },
        { nombre: 'Brisa Calahorrano' },
    ];

    const nombreCurso = 'Contabilidad 3ro "C"';

    return (
        <div className="contacto-container">
            <section className="contacto-main-section">

                <div className="contacto-info-block institucion-info">
                    <div className="institucion-header">
                        {/* Placeholder para el logo */}
                        <div className="institucion-logo-placeholder">
                            {/* Si tuvieras una imagen real */}
                            <img src={Tarjeta} alt="Logo Institución Innova" />
                        </div>
                        <div className="institucion-text">
                            <h2>Sobre la Institución</h2>
                            <p>
                                Este proyecto fue desarrollado por estudiantes del curso <strong>"{nombreCurso}"</strong> como parte de las actividades académicas en la institución:
                            </p>
                            <p>
                                <strong>{institucion.nombre}</strong>
                            </p>
                        </div>
                    </div>
                    <p>{institucion.direccion}</p>
                </div>

                <div className="contacto-info-block creadores-info">
                    <h2>Creado por</h2>
                    <ul className="creadores-list">
                        {creadores.map((creador, index) => (
                            <li key={index}>{creador.nombre}</li>
                        ))}
                    </ul>
                </div>

            </section>
        </div>
    );
}

export default Contacto;