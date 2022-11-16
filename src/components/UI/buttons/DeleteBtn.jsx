import React from 'react';
import {FaTrash} from "react-icons/fa";
import classes from "./Btns.module.css";

const DeleteBtn = ({onClick}) => {
    return (

<FaTrash className={classes.deleteIcon} onClick={onClick}/>
    );
    
};

export default DeleteBtn;