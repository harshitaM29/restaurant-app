import classes from './HeaderCart.module.css';
import CartIcon from '../Cart/CartIcon';
import { Fragment, useContext} from 'react';
import CartContext from '../../store/cart-context';



const HeaderCart = props => {
    const cart = useContext(CartContext);
    let quantity = 0;
    cart.items.forEach(item => {
        quantity = quantity + Number(item.quantity);
    });
    return (
        <Fragment>
       <button className={classes.button} onClick={props.onClick}>
        <span  className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{quantity}</span>

       </button>
       </Fragment>
    )
}

export default HeaderCart;