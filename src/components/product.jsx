import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState} from "react";

function Product(props){
const [quantity, setQuantity] = useState(0);

    function handleQuantityChange(qty){
        console.log ("quantity change", qty);
        setQuantity(qty); 
    
    }

// Alternative function for getting total:
// function getTotal() {
//     let total = props.data.price * quantity;
//     return total.toFixed(2);
// }

    return (
        <div className="product">
                <div className="items">
                    <img src= {"/images/"+props.data.image}  alt=""/>
                    <h4>{props.data.title}</h4>
                    <label>Each: ${props.data.price.toFixed(2)}</label>
                    <label>Total: ${(props.data.price*quantity).toFixed(2)}</label>
                    
                    <QuantityPicker onChange={handleQuantityChange} />
                </div>
        </div>
    );
}

export default Product;
