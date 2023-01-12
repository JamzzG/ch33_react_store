import DataContext from "./dataContext";
import { useState } from "react";
//fulfills promise from dataContext
function GlobalData(props) {
    const [cart, setCart] = useState([]);
    const [fakeUser, setFakeUser] = useState({ name: "James" });

    function addProductToCart() {
        console.log("global function called");
    }
    function removeProductFromCart() {}

    return (
        <DataContext.Provider
            value={{
                cart: cart,
                user: fakeUser,
                addProductToCart: addProductToCart,
                removeProductFromCart: removeProductFromCart,
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
}

export default GlobalData;

//This should be an empty function to provide a framework for other components

//a simple missed comma can cause a huge error line
