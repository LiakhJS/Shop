import React from "react";
import classes from "./Btns.module.css";
import { BsFillPencilFill } from "react-icons/bs";

const EditBtn = ({ onClick }) => {
  return <BsFillPencilFill className={classes.editIcon} onClick={onClick} />;
};

export default EditBtn;
