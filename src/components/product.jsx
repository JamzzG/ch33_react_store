import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props){
    return (
        <div className="product">
                <div>
                    <img src= {"/images/"+props.data.image} width={200} alt=""/>
                    <h4>{props.data.title}</h4>
                    <label>${props.data.price.toFixed(2)}</label>

                    
                    <QuantityPicker></QuantityPicker>
                </div>
        </div>
    );
}

export default Product;
