import "./catalog.css";
import Product from "../components/product";
import DataService from "../services/dataService";
import { useEffect, useState } from "react";

function Catalog() {
    const [products, setProducts] = useState([]);

    //when the component loads
    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        console.log("catalog loaded");
        let service = new DataService();
        let prodList = await service.getCatalog();
        setProducts(prodList);
    }
    return (
        <div className="catalog">
            <h5>We have {products.length} amazing options to choose from!</h5>
            <div className="products">
                {products.map((prod) => (
                    <Product data={prod}></Product>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
