import Nav from './Nav';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Contact from './Contact';
import ChatBot from './ChatBot';

function App() {
    return (
        <div className="portfolio">
            <Nav />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>
            <ChatBot />
        </div>
    );
}

export default App;
