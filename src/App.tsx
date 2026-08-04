import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Marquee from './components/Marquee/Marquee';
import Nav from './components/Nav/Nav';
import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator';
import Work from './components/Work/Work';

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Footer />
      <ScrollIndicator />
    </>
  );
}
