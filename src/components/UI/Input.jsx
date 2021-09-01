import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef(( props, ref ) => {
    return <div className={classes.input}>
        <label className={classes.txt} htmlFor={props.input.id}>{props.label}</label>
        <input className={classes.form} ref={ref} {...props.input}/>
    </div>
});

export default Input;