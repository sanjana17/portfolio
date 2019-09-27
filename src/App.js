import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage/HomePage'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="App">
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
