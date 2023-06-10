import classes from './MealForm.module.css';

const MealForm = () => {
    return (
        <form className={classes.form}>
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" id="amount" />
        </div>
            <button type="submit">+Add</button>
            </form>

    )
}

export default MealForm;