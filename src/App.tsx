import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WelcomeSection from "./pages/WelcomeSection.tsx";

function App() {
    return (
        <>
            <Header />
            <main>
                <WelcomeSection />
                <Home />
            </main>
            <Footer />
        </>
    );
}

export default App;
