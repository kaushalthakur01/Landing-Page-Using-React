import './App.css';
import Home from './component/Home';
import About from './component/About';
import Work from './component/Work';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';
import ScrollTop from './component/ScrollTop';

function App() {
  return (
    <div className="App">
      <Home  />
      <About />
      <Work />
      <Testimonial />
      <Contact />
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;
