import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import { useSEO } from '../hooks/useSEO';
import Marquee from '../components/Marquee/Marquee';
import Nav from '../components/Nav/Nav';
import ScrollIndicator from '../components/ScrollIndicator/ScrollIndicator';
import Work from '../components/Work/Work';

export default function Home() {
  useSEO({ path: '/' });

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
