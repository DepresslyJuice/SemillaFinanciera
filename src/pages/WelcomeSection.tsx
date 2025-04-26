function WelcomeSection() {
    return (
        <section style={{ padding: '2rem', backgroundColor: '#f0f4f8', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2c3e50' }}>
                ¡Bienvenido a tu espacio de Finanzas Inteligentes!
            </h2>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: '#34495e' }}>
                Tener un hábito de ahorrar y hacer tu planificación financiera dará como resultado un futuro estable y el alcance de tus metas personales.
                Un buen presupuesto nos ayuda a organizar nuestros ingresos y gastos, controlar deudas y tomar decisiones financieras más inteligentes.
                Este hábito no solo mejora la calidad de vida, sino que también garantiza una mayor seguridad financiera.
            </p>

            <blockquote style={{ marginTop: '2rem', fontStyle: 'italic', fontSize: '1.5rem', color: '#27ae60' }}>
                "Planifica, ahorra y conquista tus metas. ¡Tú puedes lograrlo!"
            </blockquote>
        </section>
    );
}

export default WelcomeSection;
