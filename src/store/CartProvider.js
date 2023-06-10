import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    
    const [cartItemList, setCartItemList] = useState([])
    const addItemToCart = (item, q) => {
        // cartContext.items.push(item)
        const index = cartItemList.findIndex(ct => ct.id === item.id);
        console.log(index)
        if(index === -1) {
            const newPrice = item.price * q
            console.log(newPrice)
            const updateCart = cartItemList.push({
                ...item,
                quantity: q,
                price: newPrice
              });
              setCartItemList(updateCart)
            //setCartItemList([...cartItemList,updateCart]);  
        } else {
            cartItemList[index].quantity += q;
            cartItemList[index].price *= cartItemList[index].quantity;
            const updateCart = [...cartItemList];
            setCartItemList(updateCart);  
        }
        
        setCartItemList([...cartItemList])
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