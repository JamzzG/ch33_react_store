import { Button } from "bootstrap";
import { useContext } from "react";
import DataContext from "./../store/dataContext";
import "./cart.css";

function Cart() {
    const cart = useContext(DataContext).cart;
    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <h3>You have {cart.length} items in your cart.</h3>
            <div>
                {cart.map((prod) => (
                    <div className="cart-item">
                        <img src={"/images/" + prod.image} alt="" />
                        <h6>{prod.title}</h6>
                        <label>{prod.price}</label>
                        <button className="btn btn-sm btn-danger">
                            Remove Item
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
