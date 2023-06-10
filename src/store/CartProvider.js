import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    const [cartItemList, setCartItemList] = useState([])
    const addItemToCart = (item) => {
        // cartContext.items.push(item)
        setCartItemList([...cartItemList,item])
        //console.log(cartContext)
    }
    const removeItemFromCart = (id) => {}
    const cartContext = {
        items: cartItemList,
        totalAmount: 0,
        addItem:addItemToCart ,
        remoeItem: removeItemFromCart
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;