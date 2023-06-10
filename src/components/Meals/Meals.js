import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import MealList from "./MealList";


const Meals = () => {
    return (
        <Fragment>
            
        <MealsSummary />
        <MealList />
        </Fragment>
    )
};

export default Meals;