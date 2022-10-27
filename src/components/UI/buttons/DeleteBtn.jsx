import React from 'react';
import {FaTrash} from "react-icons/fa";
import classes from "./Btns.module.css";

const DeleteBtn = ({onClick}) => {
    return (

<td><FaTrash className={classes.deleteIcon} onClick={onClick}/></td>
    );

    
};

export default DeleteBtn;