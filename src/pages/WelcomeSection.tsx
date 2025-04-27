import { useNavigate } from 'react-router-dom';
import '../css/WelcomeSection.css';

function WelcomeSection() {
    const navigate = useNavigate();

    const handleStart = () => {
        navigate('/temas');
    };

    return (
        <section className="welcome">
            <h2>
                ¡Bienvenido a tu espacio de Finanzas Inteligentes!
            </h2>
            <p>
                Tener un hábito de ahorrar y hacer tu planificación financiera dará como resultado un futuro estable y el alcance de tus metas personales.
                Un buen presupuesto nos ayuda a organizar nuestros ingresos y gastos, controlar deudas y tomar decisiones financieras más inteligentes.
                Este hábito no solo mejora la calidad de vida, sino que también garantiza una mayor seguridad financiera.
            </p>

            <blockquote>
                "Planifica, ahorra y conquista tus metas. ¡Tú puedes lograrlo!"
            </blockquote>

            <button onClick={handleStart}>Ver temas</button>
        </section>
    );
}

export default WelcomeSection;