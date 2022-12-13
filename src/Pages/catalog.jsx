import "./catalog.css";
import Product from '../components/product'
import DataService from '../services/dataService';
import { useEffect, useState } from "react";

function Catalog()  {

    const [products, setProducts] =useState([]);

    //when the component loads
    useEffect(() => {
        console.log ("catalog loaded")
        let service=new DataService();
        let prodList=service.getCatalog();
        setProducts(prodList);
    }, []);

    return (
        <div className="catalog">
            <h3>Buy this schlock!</h3>
            <h5>We have {products.length} outstanding offerings for you!</h5>
            <div classname="products">
                {products.map (prod => <Product data={prod}></Product>)}
            </div>
                        
    

        </div>
    );
}

export default Catalog;


// Homework: Arrow Functions for JS 