import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = props => {
    const cartItemCtx = useContext(CartContext)
    let totalAmount = 0;
    const hasCartItems = cartItemCtx.items.length > 0;
  

    const addCartHandler = (item) => {
        const index = cartItemCtx.items.findIndex(ct => ct.id === item.id);
       if(index !== -1) {
        console.log(item.quantity);
        const newQ = Number(item.quantity) + 1;
        console.log(newQ);
       // let quantity = 1;
        //let price = item.price + item.price;
        cartItemCtx.addItem({...item,quantity:newQ})
       }
        

    }
    const removeCartHandler = (id) => {
        cartItemCtx.removeItem(id)
    }
    const cartItems = <ul className={classes['cart-items']}>{
      cartItemCtx.items.map((item) => 
     
      <CartItem key={item.id} name={item.name} quantity={item.quantity} price={item.price} onAdd={addCartHandler.bind(null,item)}
         onRemove={removeCartHandler.bind(null,item.id)} />
      
      )
      }</ul> 
    
      cartItemCtx.items.forEach(item => {
        const sum = Number(item.quantity) * Number(item.price)
        totalAmount = totalAmount + sum ;
        // console.log(totalAmount)
        
    });
      
    return (
        <Modal onClose={props.onClose}>
        
                      {cartItems}
          
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        {hasCartItems && <button className={classes.button}>Order</button>}
        </div>
        </Modal>
         
        
    )
}

export default Cart;