import React, { useState, useCallback, useMemo } from 'react';

interface Pregunta {
    texto: string;
    opciones: string[];
    correcta: string;
}

const preguntas: Pregunta[] = [
    {
        texto: "¿Por qué ahorrarías y diseñarías un presupuesto?",
        opciones: [
            "Emergencias",
            "Cumplir metas personales",
            "Tranquilidad financiera",
            "Viajar por el mundo"
        ],
        correcta: "Tranquilidad financiera"
    },
    {
        texto: "¿Qué meta te motivaría más a empezar a ahorrar hoy mismo?",
        opciones: [
            "Viajar",
            "Comprar videojuegos",
            "Pagar estudios",
            "Ir de fiesta todos los fines de semana"
        ],
        correcta: "Pagar estudios"
    },
    {
        texto: "¿Qué tipo de ahorro te gustaría tener?",
        opciones: [
            "Ahorro para emergencias",
            "Gastar todo y ahorrar después",
            "Ahorro solo en diciembre",
            "Pedir prestado siempre"
        ],
        correcta: "Ahorro para emergencias"
    },
    {
        texto: "¿Qué método de ahorro te gustaría usar?",
        opciones: [
            "Gastar sin control",
            "Método 50/30/20",
            "Pedir prestado para ahorrar",
            "Comprar primero, ahorrar después"
        ],
        correcta: "Método 50/30/20"
    }
];

function ParteInteractiva() {
    const [respuestas, setRespuestas] = useState<string[]>(Array(preguntas.length).fill(""));
    const [mostrarResultados, setMostrarResultados] = useState(false);

    const handleChange = useCallback(
        (preguntaIndex: number, opcion: string) => {
            const nuevasRespuestas = [...respuestas];
            nuevasRespuestas[preguntaIndex] = opcion;
            setRespuestas(nuevasRespuestas);
        },
        [respuestas, setRespuestas]
    );

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setMostrarResultados(true);
    }, [setMostrarResultados]);

    const handleReiniciar = useCallback(() => {
        setRespuestas(Array(preguntas.length).fill(""));
        setMostrarResultados(false);
    }, [setRespuestas, setMostrarResultados]);

    const { totalAciertos, porcentajeAciertos } = useMemo(() => {
        let aciertos = 0;
        respuestas.forEach((respuesta, index) => {
            if (respuesta === preguntas[index].correcta) {
                aciertos++;
            }
        });
        const porcentaje = Math.round((aciertos / preguntas.length) * 100);
        return { totalAciertos: aciertos, porcentajeAciertos: porcentaje };
    }, [respuestas, preguntas]);

    const handleCerrarModal = useCallback(() => {
        setMostrarResultados(false);
    }, [setMostrarResultados]);

    return (
        <section style={styles.section}>
            <h2 style={styles.heading}>Parte Interactiva</h2>

            {!mostrarResultados ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                    {preguntas.map((pregunta, preguntaIndex) => (
                        <div key={preguntaIndex} style={styles.questionContainer}>
                            <p style={styles.questionText}>{pregunta.texto}</p>
                            <div style={styles.optionsContainer}>
                                {pregunta.opciones.map((opcion, opcionIndex) => (
                                    <label key={opcionIndex} style={styles.label}>
                                        <input
                                            type="radio"
                                            name={`pregunta-${preguntaIndex}`}
                                            value={opcion}
                                            checked={respuestas[preguntaIndex] === opcion}
                                            onChange={() => handleChange(preguntaIndex, opcion)}
                                        />
                                        {opcion}
                                    </label>
                                ))}
                            </div>
                        </div>
                    ))}

                    <button type="submit" style={styles.submitButton}>
                        Ver mis respuestas
                    </button>
                </form>
            ) : (
                <div style={styles.resultsContainer}>
                    <h3 style={styles.resultsHeading}>Tus respuestas</h3>

                    {preguntas.map((pregunta, index) => (
                        <div key={index} style={styles.answerContainer}>
                            <p style={styles.answerQuestion}>{pregunta.texto}</p>
                            <span style={{ fontWeight: 'bold', color: respuestas[index] === pregunta.correcta ? '#2ecc71' : '#e74c3c' }}>
                                {respuestas[index] || "Sin respuesta"}
                            </span>
                            {!respuestas[index] !== pregunta.correcta && (
                                <small style={styles.correctAnswer}>
                                    Respuesta correcta: {pregunta.correcta}
                                </small>
                            )}
                        </div>
                    ))}

                    <div style={styles.scoreContainer}>
                        ¡Aciertos: {totalAciertos} de {preguntas.length} ({porcentajeAciertos}%)!
                    </div>

                    <div style={styles.progressBar}>
                        <div style={{
                            ...styles.progressBarFill,
                            width: `${porcentajeAciertos}%`,
                            backgroundColor: porcentajeAciertos >= 70 ? '#2ecc71' : '#e74c3c',
                        }} />
                    </div>

                    <button onClick={handleReiniciar} style={styles.restartButton}>
                        Reiniciar Quiz
                    </button>
                </div>
            )}

            {mostrarResultados && porcentajeAciertos >= 70 && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modalContent}>
                        <h2 style={styles.modalHeading}>¡Felicidades! 🎉</h2>
                        <p>¡Obtuviste un excelente resultado!</p>
                        <button onClick={handleCerrarModal} style={styles.modalButton}>
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

const styles = {
    section: { padding: '2rem', backgroundColor: '#ecf0f1', minHeight: '100vh' },
    heading: { fontSize: '2rem', marginBottom: '2rem', color: '#2c3e50', textAlign: 'center' },
    form: { display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' },
    questionContainer: { marginBottom: '1.5rem' },
    questionText: { fontWeight: 'bold', marginBottom: '1rem', color: '#34495e' },
    optionsContainer: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    label: { display: 'flex', alignItems: 'center', gap: '0.5rem' },
    submitButton: {
        marginTop: '2rem',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#3498db',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        ':hover': { backgroundColor: '#2980b9' },
    },
    resultsContainer: { maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    resultsHeading: { fontSize: '1.5rem', color: '#2c3e50', textAlign: 'center' },
    answerContainer: { backgroundColor: '#ffffff', padding: '1rem', borderRadius: '8px', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' },
    answerQuestion: { fontWeight: 'bold', marginBottom: '0.5rem', color: '#34495e' },
    correctAnswer: { color: '#e67e22' },
    scoreContainer: {
        marginTop: '2rem',
        padding: '1rem',
        backgroundColor: '#dff9fb',
        borderRadius: '8px',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#130f40',
        fontSize: '1.2rem'
    },
    progressBar: {
        marginTop: '1rem',
        width: '100%',
        height: '20px',
        backgroundColor: '#dcdde1',
        borderRadius: '10px',
        overflow: 'hidden'
    },
    progressBarFill: { height: '100%', transition: 'width 0.5s ease' },
    restartButton: {
        marginTop: '2rem',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#e67e22',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        ':hover': { backgroundColor: '#d35400' },
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
    },
    modalContent: {
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)'
    },
    modalHeading: { color: '#27ae60', marginBottom: '1rem' },
    modalButton: {
        marginTop: '1.5rem',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#3498db',
        color: 'white',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        ':hover': { backgroundColor: '#2980b9' },
    }
};

export default ParteInteractiva;