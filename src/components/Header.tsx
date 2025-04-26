function Header() {
    return (
        <header style={{ backgroundColor: '#4CAF50', padding: '1rem', color: 'white' }}>
            <h1 style={{ margin: 0 }}>💰 Cultura del Ahorro</h1>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem', marginTop: '0.5rem' }}>
                    <li><a href="#inicio" style={{ color: 'white' }}>Inicio</a></li>
                    <li><a href="#metodos" style={{ color: 'white' }}>Métodos</a></li>
                    <li><a href="#presupuesto" style={{ color: 'white' }}>Presupuesto</a></li>
                    <li><a href="#tarjetas" style={{ color: 'white' }}>Tarjetas</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
