import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import DataContext from "../store/dataContext";

function Product(props) {
    const [quantity, setQuantity] = useState(1);
    let addProductToCart = useContext(DataContext).addProductToCart;

    function handleQuantityChange(qty) {
        console.log("quantity change", qty);
        setQuantity(qty);
    }

    function updateCart() {
        console.log("updated cart", props.data);
        addProductToCart(props.data); //calling the global function
    }

    return (
        <div className="product">
            <div className="items">
                <img src={"/images/" + props.data.image} alt="" />
                <h4>{props.data.title}</h4>
                <label>Each: ${props.data.price.toFixed(2)}</label>
                <br />
                <label>
                    Total: ${(props.data.price * quantity).toFixed(2)}
                </label>
                <span>
                    <QuantityPicker
                        onChange={handleQuantityChange}
                        updateCart={updateCart}
                    />
                </span>
            </div>
        </div>
    );
}

export default Product;
