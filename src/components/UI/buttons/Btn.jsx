import React from 'react';
import classes from "./Btns.module.css";

const Button = ({children, onClick, disabled, hidden}) => {
    return (
    <button hidden={hidden} disabled={disabled} className={classes.btn} onClick={onClick}>{children}</button>   
    );
};

export default Button;