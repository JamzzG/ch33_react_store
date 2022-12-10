import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(){
    return (
        <div className="product">
                <div>
                    <img src="https://picsum.photos/200/200" alt="tumbleweed" />
                    <h4>Tumbleweeds</h4>
                    <label>
                        55$
                    </label>
                    <QuantityPicker></QuantityPicker>
                </div>
        </div>
    );
}

export default Product;
