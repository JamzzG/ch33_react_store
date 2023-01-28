import "./quantityPicker.css";
import { useState } from "react";

function QuantityPicker({ onChange, updateCart }) {
    const [quantity, setQuantity] = useState(1);

    function handleIncrease() {
        let nextVal = quantity + 1;
        setQuantity(nextVal);
        onChange(nextVal);
    }

    function handleDecrease() {
        if (quantity === 1) return;

        let nextVal = quantity - 1;
        setQuantity(nextVal);
        onChange(nextVal);
    }

    return (
        <div className="qty-picker">
            <button
                disabled={quantity === 0}
                onClick={handleDecrease}
                className="minus"
            >
                -
            </button>
            <button onClick={updateCart} className="add">
                Add:
                {quantity}
            </button>
            <button onClick={handleIncrease} className="plus">
                +
            </button>
        </div>
    );
}

export default QuantityPicker;
