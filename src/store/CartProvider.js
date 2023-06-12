import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    
    const [cartItemList, setCartItemList] = useState([])
    const addItemToCart = (item, q) => {
        const index = cartItemList.findIndex(ct => ct.id === item.id);
        if(index === -1) {
            const newquant = item.quantity + q;
            const updateCart = cartItemList.push({
                ...item,
                quantity: newquant,
              });
              setCartItemList(updateCart)
        } else {
            let newquant = 0
            if(q !== undefined){
             newquant = item.quantity + q;
            }
            else {
                newquant = 1
            }
            cartItemList[index].quantity += newquant;
            const updateCart = [...cartItemList];
            setCartItemList(updateCart);  
        }
        
        setCartItemList([...cartItemList])
    }

    const removeItemFromCart = (id) => {
        console.log(cartItemList)
        const index = cartItemList.findIndex(ct => ct.id === id);
        if(index !== -1) {
            const newQuant = 1;
           
            cartItemList[index].quantity -= newQuant;
            console.log("delete",cartItemList[index].quantity)
            if(cartItemList[index].quantity === 0) {
                cartItemList.splice(index, 1);
            }
            const updateCart = [...cartItemList];
            setCartItemList(updateCart);
        }
        setCartItemList([...cartItemList])

    }
    const cartContext = {
        items: cartItemList,
        totalAmount: 0,
        addItem:addItemToCart ,
        removeItem: removeItemFromCart
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;