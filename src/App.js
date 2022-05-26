import './App.css';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
  return (
    <div className=' text-white font-mono'>
      <Navigation />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
