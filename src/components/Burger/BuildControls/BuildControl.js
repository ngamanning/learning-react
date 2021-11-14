import React from "react";
import classes from "./BuildControl.module.css";
import PropTypes from 'prop-types'
const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div>{props.label}</div>
      <div>
        <button disabled = {props.disabled}
          onClick ={props.remove}>Less</button>
        <button onClick = {props.add}>More</button>
      </div>
    </div>
  );
};

BuildControl.propTypes ={
remove: PropTypes.func,
 label:(props, propName) =>{
   if( typeof(props[propName]) !=='string'){
     throw Error ('label must be a string')
   }
 }
}

export default BuildControl;

