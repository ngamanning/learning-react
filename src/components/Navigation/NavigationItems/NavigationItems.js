import React from "react";
import classes from "../Navigation.module.css";
import NavigationItem from "../NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className = {classes.NavigationItems}>
        <NavigationItem href={props.link}> 
            Burger Builder
        </NavigationItem>   
        <NavigationItem href={props.link}> 
            Checkout
        </NavigationItem>  
    </ul> 
  );
};
export default NavigationItems;
