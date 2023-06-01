import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import LinkShortener from './components/LinkShortener/LinkShortener';
import Cards from './components/Cards/Cards';
import CTA from  './components/CTA/CTA';
import Footer from './components/Footer/footer';
import './style/main.scss';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <LinkShortener />
      <Cards />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
