import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    
    const [cartItemList, setCartItemList] = useState([])
    const addItemToCart = (item, q) => {
        // console.log(item);
        // cartContext.items.push(item)
        const index = cartItemList.findIndex(ct => ct.id === item.id);
        if(index === -1) {
            const newquant = item.quantity + q;
            // console.log(newquant)
            const updateCart = cartItemList.push({
                ...item,
                quantity: newquant,
                // price: newPrice
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
            console.log("newQuant",newquant)
            cartItemList[index].quantity += newquant;
            //cartItemList[index].price += cartItemList[index].price;
            const updateCart = [...cartItemList];
            setCartItemList(updateCart);  
        }
        
        setCartItemList([...cartItemList])
        console.log(cartItemList)
    }

    const removeItemFromCart = (id) => {
        const index = cartItemList.findIndex(ct => ct.id === id);
        if(index !== -1) {
            const newQuant = 1;
            console.log("new",newQuant)
            cartItemList[index].quantity -= newQuant;
            if(cartItemList[index].quantity === 0) {
                cartItemList.pop(id);
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