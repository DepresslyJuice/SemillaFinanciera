import React, { useState } from "react";
import { motion } from "framer-motion";

function MetodosAhorro() {
    const metodos = [
        {
            titulo: "Método 50/30/20",
            descripcionCorta: "50% necesidades, 30% deseos y 20% ahorro y deudas.",
            descripcionLarga:
                "Este método popular divide tus ingresos después de impuestos en tres categorías: 50% para necesidades esenciales (alquiler, comida, transporte), 30% para deseos (ocio, salir a comer, hobbies) y 20% para ahorro e inversión o pago de deudas. Es una forma sencilla de equilibrar tus gastos y asegurar que una parte de tus ingresos se destine al futuro.",
        },
        {
            titulo: "Método de los sobres",
            descripcionCorta: "Divide tu dinero en sobres/categorías. Cuando se acabe, no gastas más.",
            descripcionLarga:
                "Ideal para controlar el gasto impulsivo. Asigna una cantidad fija de efectivo a diferentes sobres etiquetados por categoría (comida, entretenimiento, gasolina, etc.). Una vez que el dinero en un sobre se agota, debes dejar de gastar en esa categoría hasta el próximo período presupuestario. Fomenta la conciencia del gasto y evita el uso excesivo de tarjetas.",
        },
        {
            titulo: "Método Kakebo",
            descripcionCorta: "Diario japonés de gastos: anota todo lo que ganas y gastas.",
            descripcionLarga:
                "El Kakebo, o 'libro de cuentas para la economía doméstica', es un método japonés de presupuesto que se centra en la atención plena sobre tus hábitos de gasto. Implica llevar un registro detallado de todos tus ingresos y gastos, categorizándolos y reflexionando sobre tus patrones de gasto para identificar áreas donde puedes ahorrar. Generalmente se divide en cuatro preguntas clave: ¿Cuánto dinero tengo disponible?, ¿Cuánto me gustaría ahorrar?, ¿Cuánto estoy gastando?, ¿Cómo puedo mejorar?",
        },
    ];

    const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);

    const handleClickMetodo = (index: number) => {
        setMetodoSeleccionado(index);
    };

    const handleCerrarDetalle = () => {
        setMetodoSeleccionado(null);
    };

    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>Métodos de Ahorro</h2>
            <div style={styles.gridContainer}>
                {metodos.map((metodo, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => handleClickMetodo(index)}
                        style={styles.metodoCard}
                    >
                        <h3 style={styles.metodoTitulo}>{metodo.titulo}</h3>
                        <p style={styles.metodoDescripcion}>{metodo.descripcionCorta}</p>
                        <button style={styles.verMasBoton}>Ver más</button>
                    </motion.div>
                ))}
            </div>

            {metodoSeleccionado !== null && (
                <div style={styles.modalOverlay}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        style={styles.modalContent}
                    >
                        <h3 style={styles.modalTitulo}>{metodos[metodoSeleccionado].titulo}</h3>
                        <p style={styles.modalDescripcion}>{metodos[metodoSeleccionado].descripcionLarga}</p>
                        <button style={styles.cerrarModalBoton} onClick={handleCerrarDetalle}>
                            Cerrar
                        </button>
                    </motion.div>
                </div>
            )}
        </section>
    );
}

const styles = {
    section: { padding: '2rem', backgroundColor: '#f9fafb' },
    heading: { fontSize: '2rem', marginBottom: '2rem', color: '#2c3e50', textAlign: 'center' },
    gridContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem',
    },
    metodoCard: {
        background: 'white',
        padding: '1.5rem',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        textAlign: 'center',
        cursor: 'pointer',
    },
    metodoTitulo: { color: '#2980b9', marginBottom: '1rem' },
    metodoDescripcion: { color: '#34495e' },
    verMasBoton: {
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '0.9rem',
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
    },
    modalContent: {
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
        textAlign: 'left',
        minWidth: '400px',
        maxWidth: '80%',
    },
    modalTitulo: { color: '#2980b9', marginBottom: '1rem', fontSize: '1.5rem' },
    modalDescripcion: { color: '#34495e', marginBottom: '1.5rem' },
    cerrarModalBoton: {
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
        ':hover': { backgroundColor: '#c0392b' },
    },
};

export default MetodosAhorro;