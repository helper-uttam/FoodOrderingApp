import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <Fragment>
        <header className={classes.header}><h1>Foodie</h1></header>
        <HeaderCartButton onClick={props.onShowCart} />
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="delecious foods"/>
        </div>
    </Fragment>
}

export default Header;