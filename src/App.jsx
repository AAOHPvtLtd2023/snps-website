import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/NavBar'
import Partners from './Components/Partner'
import Services from './Components/Services'
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
