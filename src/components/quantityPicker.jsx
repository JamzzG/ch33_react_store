import "./quantityPicker.css";
import { useState } from 'react';

function QuantityPicker(props){
    const [quantity, setQuantity] = useState(0);

    function handleIncrease(){
        let nextVal=quantity +1;
        setQuantity(nextVal);
        props.onChange(nextVal);
    }

    function handleDecrease(){
        if (quantity===0) return;

        let nextVal=quantity -1;
        setQuantity(nextVal);
        props.onChange(nextVal);
    }

    return (
        <div className="qty-picker">
            <button disabled={quantity===0}onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button onClick={handleIncrease}>+</button>
        </div>
    )
}

export default QuantityPicker;




