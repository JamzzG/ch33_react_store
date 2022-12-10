import "./catalog.css";
import Product from '../components/product'

function Catalog()  {
    return (
        <div className="catalog">
            <h3>Buy this schlock!</h3>

            <Product></Product>
            <Product></Product>
            <Product></Product>

        </div>
    );
}

export default Catalog;


// Homework: Arrow Functions for JS 