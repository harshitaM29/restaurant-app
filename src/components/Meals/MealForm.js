import classes from './MealForm.module.css';
import Input from '../UI/Input';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const MealForm = (props) => {
  
    const cartContext = useContext(CartContext);

    const addMealItem = (e) => {
        e.preventDefault();
        const count= document.getElementById( "amount" + props.id).value
        cartContext.addItem({...props.items}, Number(count))
    }
    return (
        <form className={classes.form} >
            
          <div>
            <Input 
            label="Amount" input={{
                id: "amount" + props.id,
                type: "number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue: "1"
            }}/>
        </div>
            <button type="submit" onClick={addMealItem}>+Add</button>
            </form>

    )
}

export default MealForm;