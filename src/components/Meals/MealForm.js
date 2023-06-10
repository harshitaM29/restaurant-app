import classes from './MealForm.module.css';
import Input from '../UI/Input';

const MealForm = () => {
    return (
        <form className={classes.form}>
          <div>
            <Input 
            label="Amount" input={{
                id: "amount",
                type: "number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue: "1"
            }}/>
        </div>
            <button type="submit">+Add</button>
            </form>

    )
}

export default MealForm;