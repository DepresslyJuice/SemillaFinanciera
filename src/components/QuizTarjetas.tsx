import { useState } from 'react';
import '../css/QuizTarjetas.css'
const preguntas = [
    {
        pregunta: 'Pagar solo el monto mínimo de la tarjeta de crédito es una buena estrategia financiera.',
        respuestaCorrecta: false,
    },
    {
        pregunta: 'La tarjeta de débito utiliza el dinero que tienes en tu cuenta bancaria.',
        respuestaCorrecta: true,
    },
    {
        pregunta: 'No pagar tu tarjeta de crédito puede afectar tu historial crediticio.',
        respuestaCorrecta: true,
    },
    {
        pregunta: 'Solicitar muchas tarjetas de crédito al mismo tiempo mejora tu puntaje crediticio.',
        respuestaCorrecta: false,
    },
];

function QuizTarjetas() {
    const [indiceActual, setIndiceActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [quizTerminado, setQuizTerminado] = useState(false);

    const manejarRespuesta = (respuestaUsuario: boolean) => {
        const respuestaCorrecta = preguntas[indiceActual].respuestaCorrecta;
        if (respuestaUsuario === respuestaCorrecta) {
            setPuntuacion((prev) => prev + 1);
        }

        if (indiceActual + 1 < preguntas.length) {
            setIndiceActual((prev) => prev + 1);
        } else {
            setQuizTerminado(true);
        }
    };

    const reiniciarQuiz = () => {
        setIndiceActual(0);
        setPuntuacion(0);
        setQuizTerminado(false);
    };

    return (
        <div className="quiz-tarjetas p-6 bg-white rounded-2xl shadow-md text-center">
            {!quizTerminado ? (
                <>
                    <h3 className="text-2xl font-bold mb-6">¿Mito o Realidad?</h3>
                    <p className="text-lg mb-8">{preguntas[indiceActual].pregunta}</p>
                    <div className="flex justify-center gap-6">
                        <button
                            onClick={() => manejarRespuesta(true)}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-2xl transition"
                        >
                            Verdadero
                        </button>
                        <button
                            onClick={() => manejarRespuesta(false)}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-2xl transition"
                        >
                            Falso
                        </button>
                    </div>
                </>
            ) : (
                <>
                    <h3 className="text-3xl font-bold mb-6">¡Quiz terminado!</h3>
                    <p className="text-lg mb-4">Obtuviste {puntuacion} de {preguntas.length} respuestas correctas.</p>
                    <button
                        onClick={reiniciarQuiz}
                        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-2xl transition"
                    >
                        Reiniciar Quiz
                    </button>
                </>
            )}
        </div>
    );
}

export default QuizTarjetas;