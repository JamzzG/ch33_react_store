import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './Pages/catalog';

// remember file starts with lowercase and function starts with an uppercase
function App() {
  return (
    <div className="App" >
      <NavBar />

      <div className='page-content'>
        <Catalog />
      </div>

      <Footer />
    </div>
  );
}

export default App;
