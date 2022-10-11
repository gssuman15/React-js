
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Intro from './components/Intro/Intro.js';
import Services from './components/Services/Services';
import Experience from './components/Experience/Experience';
import Work from './components/Work/Work';
import Footer from './components/footer/Footer';
import PortFolio from './components/portfolio/PortFolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     {/* <Work/> */}
     <PortFolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>
   
    </div>
  );
}

export default App;
