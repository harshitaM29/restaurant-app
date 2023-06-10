import classes from './HeaderCart.module.css';
import CartIcon from '../Cart/CartIcon';
import { Fragment, useState } from 'react';
import Cart from '../Cart/Cart';

const HeaderCart = props => {
    const [isOpen, setIsOpen] = useState(false);

    const openCart = () =>{
        setIsOpen(true);
    }

    const closeCart = () => {
        setIsOpen(false);
    }
    return (
        <Fragment>
        {isOpen && <Cart onClose={closeCart}/>}
       <button className={classes.button} onClick={openCart}>
        <span  className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>0</span>

       </button>
       </Fragment>
    )
}

export default HeaderCart;