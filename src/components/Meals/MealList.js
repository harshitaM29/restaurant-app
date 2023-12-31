import classes from './MealList.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem';
const DUMMY_MEALS = [
    {
        id:'m1',
        mealName:'Sushi',
        mealDescription:'Finest fish and veggies',
        mealPrice:22.99,
        quantity: 0
    },
    {
        id:'m2',
      mealName:'Schnitzel',
      mealDescription:'A german speciality',
      mealPrice:16.50,
      quantity: 0
  },
  {
    id:'m3',
    mealName:'Barbeque Burger',
    mealDescription:'American, raw, meaty',
    mealPrice:12.99,
    quantity: 0
}
  ]

const MealList = props => {
    const mealList =  DUMMY_MEALS.map(meal => <MealItem key={meal.id}
        id={meal.id} 
        name={meal.mealName} 
        des={meal.mealDescription} 
        price={meal.mealPrice} 
        quantity = {meal.quantity} />)
    return (
        
    <section className={classes.list}>
        <Card>
    <ul>
       {mealList}
        </ul>
        </Card>
    </section>
    )
}

export default MealList;