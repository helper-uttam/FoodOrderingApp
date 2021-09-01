import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = value => value.trim() === '';
const isNotSixChars = value =>  value.trim().length !== 6; 

const Checkout = props => {

    const [formInputIsValid, setFormInputIsValid] = useState({
        name: true,
        street: true,
        postal: true,
        city: true
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = !isNotSixChars(enteredPostal);

        setFormInputIsValid({
            name: enteredCityIsValid,
            street: enteredStreetIsValid,
            postal: enteredPostalIsValid,
            city: enteredCityIsValid
        });

        const formIsValid = enteredNameIsValid && 
                            enteredStreetIsValid &&
                            enteredPostalIsValid &&
                            enteredCityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postal: enteredPostal,
            city: enteredCity
        });
    };
    const nameControlClasses = `${classes.control} ${formInputIsValid.name ? '' : classes.invalid}`;
    const streetControlClasses = `${classes.control} ${formInputIsValid.street ? '' : classes.invalid}`;
    const postalControlClasses = `${classes.control} ${formInputIsValid.postal ? '' : classes.invalid}`;
    const cityControlClasses = `${classes.control} ${formInputIsValid.city ? '' : classes.invalid}`;


    return (
    <form className={classes.form} onSubmit={confirmHandler}>
        <div className={nameControlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' ref={nameInputRef} />
            {!formInputIsValid.name && <p>Please enter a valid name!</p> }
        </div>
        <div className={streetControlClasses}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street' ref={streetInputRef} />
            {!formInputIsValid.street && <p>Please enter a valid Address!</p> }
        </div>
        <div className={postalControlClasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input type='text' id='postal' ref={postalInputRef} />
            {!formInputIsValid.postal && <p>Please enter a valid Postal Code!(6 characters long)</p> }
        </div>
        <div className={cityControlClasses}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef} />
            {!formInputIsValid.city && <p>Please enter a valid City name!</p> }
        </div>
        <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button className={classes.submit}>Confirm</button>
        </div>
    </form>);
}

export default Checkout;