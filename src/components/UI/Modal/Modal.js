import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = (props) => {
  return (    
      <Backdrop show = {props.show} 
        clicked = {props.modalClose}>
      <div
        className={classes.Modal}
        style={props.show ? { display: "block" } : { display: "none" }}
      >
        {props.children}
      </div>
      </Backdrop>    
  );
};

export default Modal;
