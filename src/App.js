
import './App.css';
import Headers from './components/Headers';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Headers/>
     <Home/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
