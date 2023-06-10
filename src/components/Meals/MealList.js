import classes from './MealList.module.css';
import Card from '../UI/Card';


const MealList = props => {
    return (
    <Card className={classes.list}>
    <ul className={classes['ul-list']} >
        {props.meals.map(meal => (
            <li>
                <h3>{meal.mealName} </h3>
                <div className={classes.description}>{meal.mealDescription} </div>
                <div className={classes.price}>{meal.mealPrice}</div>
            </li>
        ))}
        </ul>
    </Card>
    )
}

export default MealList;