import React from "react";
import classes from "../Navigation.module.css";
const NavigationItem = (props) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={props.link} className={props.active ? "active" : null}>
        {props.children}
      </a>
    </li>
  );
};
export default NavigationItem;
