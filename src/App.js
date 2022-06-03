import './App.css';
import Navigation from './Components/Navigation';
import About from './Components/About';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

const RESUME_URL =
  'https://drive.google.com/file/d/1zbOetwEZC0hNA0K3m_6LZeuliaO4vlYV/view?usp=sharing';

function App() {
  return (
    <div className=' text-white font-mono'>
      <Navigation url={RESUME_URL} />
      <About url={RESUME_URL} />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
