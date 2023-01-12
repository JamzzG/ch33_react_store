// Interface (It is like a blueprint)

import { createContext } from "react";

// interface, it is a promise or blueprint...shouldn't nave any values or implementation. Just describes the structure of the data.

//cart and user will be variables to read
//addProductToCart and removeProductFromCart are functions to modify the variables
const DataContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => {
        console.log("Globlal Fn Called from globalData.jsx")
    },
    removeProductFromCart: () => { },
});

export default DataContext