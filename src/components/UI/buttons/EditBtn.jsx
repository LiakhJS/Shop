import React from 'react';
import classes from "./Btns.module.css";
import {BsFillPencilFill} from "react-icons/bs";



const EditBtn = ({onClick}) => {
    return (
    <td>
    <BsFillPencilFill className={classes.editIcon} onClick={onClick}/>    </td>
    );
};

export default EditBtn;