import Test from './Test';
import './app.scss';
import Hero from './components/Hero/Hero';
import Navbar from './components/NavBar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/Services/Services';
import Parralax from './components/parallax/Parralax';
import Contact from './components/contacts/Contact';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Services">
        <Parralax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parralax type="portfolio" />
      </section>

      <Portfolio />

      <section id="Technical Skills">
        <Skills />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
