import React, { useState, useCallback, useMemo } from 'react';
import '../css/Quiz.css';

interface Pregunta {
    texto: string;
    opciones: string[];
    correcta: string;
}

const preguntas: Pregunta[] = [
    {
        texto: "¿Por qué es importante ahorrar?",
        opciones: [
            "Para comprar lo que quiero en el momento",
            "Para tener dinero en caso de emergencias",
            "Para gastar sin preocupaciones",
            "Porque todo el mundo lo hace"
        ],
        correcta: "Para tener dinero en caso de emergencias"
    },
    {
        texto: "¿Qué método de ahorro te parece más útil para lograr tus metas a largo plazo?",
        opciones: [
            "Gastar todo lo que tengo y ahorrar lo que sobra",
            "Ahorrar un porcentaje fijo cada mes",
            "Pedir prestado siempre que lo necesite",
            "Comprar lo que quiero sin pensarlo"
        ],
        correcta: "Ahorrar un porcentaje fijo cada mes"
    },
    {
        texto: "¿Qué porcentaje de tus ingresos crees que es adecuado ahorrar cada mes?",
        opciones: [
            "10%",
            "50%",
            "30%",
            "5%"
        ],
        correcta: "10%"
    },
    {
        texto: "¿Qué tipo de ahorro es esencial para asegurar tu estabilidad financiera?",
        opciones: [
            "Ahorro para emergencias",
            "Ahorro solo para vacaciones",
            "Ahorro para productos de lujo",
            "Ahorro para comprar lo que me gusta"
        ],
        correcta: "Ahorro para emergencias"
    }
];

function Quiz1() {
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

    return (
        <section className="section">
            <h2 className="heading">Quiz</h2>

            {!mostrarResultados ? (
                <form onSubmit={handleSubmit} className="form">
                    {preguntas.map((pregunta, preguntaIndex) => (
                        <div key={preguntaIndex} className="questionContainer">
                            <p className="questionText">{pregunta.texto}</p>
                            <div className="optionsContainer">
                                {pregunta.opciones.map((opcion, opcionIndex) => (
                                    <label key={opcionIndex} className="label">
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

                    <button type="submit" className="submitButton">
                        Ver mis respuestas
                    </button>
                </form>
            ) : (
                <div className="resultsContainer">
                    <h3 className="resultsHeading">Tus respuestas</h3>

                    {preguntas.map((pregunta, index) => (
                        <div key={index} className="answerContainer">
                            <p className="answerQuestion">{pregunta.texto}</p>
                            <span className={respuestas[index] === pregunta.correcta ? 'correct' : 'incorrect'}>
                                {respuestas[index] || "Sin respuesta"}
                            </span>
                            {respuestas[index] !== pregunta.correcta && (
                                <small className="correctAnswer">
                                    Respuesta correcta: {pregunta.correcta}
                                </small>
                            )}
                        </div>
                    ))}
                    {/* Aquí va el nuevo label con mensaje de felicitaciones */}
                    {porcentajeAciertos >= 70 && (
                        <label className="congratulationsMessage">¡Felicidades! 🎉</label>
                    )}
                    <div className="scoreContainer">
                        ¡Aciertos: {totalAciertos} de {preguntas.length} ({porcentajeAciertos}%)!
                    </div>

                    <div className="progressBar">
                        <div className="progressBarFill" style={{ width: `${porcentajeAciertos}%`, backgroundColor: porcentajeAciertos >= 70 ? '#2ecc71' : '#e74c3c' }} />
                    </div>

                    <button onClick={handleReiniciar} className="restartButton">
                        Reiniciar Quiz
                    </button>
                </div>
            )}
        </section>
    );
}

export default Quiz1;
