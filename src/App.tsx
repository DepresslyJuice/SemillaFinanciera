import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomeSection from "./pages/WelcomeSection.tsx";


function App() {
    return (
        <>
            <Header />
            <main>
                <WelcomeSection />
            </main>
            <Footer />
        </>
    );
}

export default App;
