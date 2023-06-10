import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const Cart = props => {
    const cartItemCtx = useContext(CartContext)
    console.log(cartItemCtx.items)
    let totalAmount = 0;
    const cartItems = <ul className={classes['cart-items']}>{
      cartItemCtx.items.map((item) => 
     
      <li key={item.id}> {item.name} {item.quantity} </li>
      
      )
      }</ul> 
    
      cartItemCtx.items.forEach(item => {
        
        totalAmount = totalAmount + Number(item.price);
        
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
        <button className={classes.button}>Order</button>
        </div>
        </Modal>
         
        
    )
}

export default Cart;