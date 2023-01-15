import "./title.css";
import Product from "../components/product";
import Catalog from "../pages/catalog";

function Title() {
    return (
        <div>
            <div className="title">
                <h5>
                    "Bringing the Wild West to your front door" we are the...
                </h5>
                <h3>Tumbleweed Depot</h3>
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
