import classes from './MealItem.module.css';
import MealForm from './MealForm';

const MealItem = (props) => {
    // console.log("mealItem", props)
   const price = `$${props.price.toFixed(2)}`;

    return (
        <li  className={classes.meal} key={props.id}>
            <div>
                
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.des}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
               <MealForm id={props.id} items={props} /> 
            </div>
        </li>
    )
}

export default MealItem;