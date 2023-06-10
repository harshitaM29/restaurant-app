import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderCart from './HeaderCart';
import mealsImage from '../assets/meals.jpg'

const Header = props => {
    return (
        <Fragment>
        <div className={classes.header}>
            <h2>ReactMeals</h2>
            <HeaderCart onClick={props.onOpen}/>
        </div>
        <div className={classes['main-image']}>
        <img src={mealsImage}alt="meals"/>
        </div>
      
        </Fragment>
    )
}

export default Header;