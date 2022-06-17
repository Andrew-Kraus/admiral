import './fonts/fonts.css'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './components/Header'
import Slider from './components/Slider';
import Services from './components/Services';
import Catalog from './components/Catalog';
import Delivery from './components/Delivery';
import Portfolio from './components/Portfolio';
import Uniform from './components/Uniform';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <div className='page'>
      <Header />
      <Slider />
      <About />
      <Services />
      <Catalog />
      <Delivery />
      <Portfolio />
      <Uniform />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
