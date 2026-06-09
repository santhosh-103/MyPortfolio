import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certificates from "./sections/Certificates";
import Profiles from "./sections/Profiles";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Profiles />
      <Contact />
      <Footer />
    </>
  );
}

export default App;