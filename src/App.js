import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './pages/catalog';

// remember file starts with lowercase and function starts with an uppercase

function App() {

  return (
    <div className="App" >
      <NavBar />
      <img src="../images/tumbleweed-clip-art.png" className="App-logo" alt="logo" />
      <div className='page-content'>
        <Catalog />
      </div>

      <Footer />
    </div>
  );
}

export default App;
