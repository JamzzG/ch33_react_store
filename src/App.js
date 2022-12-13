import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './pages/catalog';
import DataService from './services/dataService';

// remember file starts with lowercase and function starts with an uppercase

function App() {

  return (
    <div className="App" >
      <NavBar />
      <div className="App-logo-roll">
        <img src="../images/tumbleweed-clip-art.png" className="App-logo" alt="logo" />
      </div>

      <div className='page-content'>
        <Catalog />
      </div>

      <Footer />
    </div>
  );
}

export default App;
