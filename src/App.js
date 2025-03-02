import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        {/* <Certifications /> */}
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;