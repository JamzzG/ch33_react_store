import "./title.css";
import Product from "../components/product";
import Catalog from "../pages/catalog";
import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "./../store/dataContext";

function Title() {
    const cart = useContext(DataContext).cart;
    return (
        <div>
            <div className="title">
                <h3>Tumbleweed Depot</h3>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                    {/* Only way I could find to remove underscore from Link was add the inline style  which I know is frowned upon but all versio */}
                    <div className="cart-count">
                        <div className="counter-label">Cart: </div>
                        <div className="counter">{cart.length}</div>
                    </div>
                </Link>
            </div>

            <div className="icon-accross">
                <div className="icon-hop">
                    <img
                        src="../images/tumbleweed-clip-art.png"
                        className="icon"
                        alt="tumbleweed-clip-art"
                    />
                </div>
            </div>
        </div>
    );
}

export default Title;
