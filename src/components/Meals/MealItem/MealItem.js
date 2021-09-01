import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";

const MealItem = props => {

    const cartCtx = useContext(CartContext);
    
    const price = `INR ${props.price.toFixed(2)}`;
    
    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };
    return <li className={classes.meal}>
                <div>
                    <h3>{props.name}</h3>
                    <div className={classes.description}>{props.description}</div>
                    <div className={classes.price}>{price}</div>
                    </div>
                <CartContext.Provider value={cartCtx}>
                    <MealItemForm onAddToCart={addToCartHandler} />
                </CartContext.Provider>
            </li>
};

export default MealItem;