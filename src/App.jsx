import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";

function App() {

  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div>
          <Tech />
        </div>
        <div id='projects'>
          <Works />
        </div>
        <div className="relative z-0" id="contact">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
}

export default App;
