import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div className="bg-primary">
            <Header />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;