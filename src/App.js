import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Title from './components/title';
import Footer from './components/footer';
import QuantityPicker from './components/quantityPicker';
import Catalog from './pages/catalog';
import DataService from './services/dataService';
import Home from './pages/home';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Test from './pages/test';
import GlobalData from './store/globalData';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';





// remember file starts with lowercase and function starts with an uppercase

function App() {

  return (
    <GlobalData>
      <BrowserRouter>
        <div className="App" >
          <NavBar />
          <Title />

          <div className='page-content'>
            <Routes>
              <Route path="/" element={<Home />} ></Route>
              <Route path="/home" element={<Home />} ></Route>
              <Route path="/catalog" element={<Catalog />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
              <Route path="/test" element={<Test />}></Route>

            </Routes>

          </div>

          <Footer />

        </div >
      </BrowserRouter >
    </GlobalData>
  );
}

export default App;
