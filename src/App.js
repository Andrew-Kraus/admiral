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

function App() {
  return (
    <div>
      <Header />
      <Slider />
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
