import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl'

const controls = [
    {label: 'Vegetables', type:'vegetables'},
    {label: 'Bacon', type:'bacon'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'}
]

const BuildControls = (props) =>{
    return (
        <div className={ classes.BuildControl}>
        <div>Total price: ${(props.totalPrice/100).toFixed(2)}</div>
         {
             controls.map(ctr => 
                <BuildControl 
                    key = {ctr.label} 
                    label = {ctr.label} 
                    add = {() => props.addHandler(ctr.type)}
                    remove = {() => props.removeHandler(ctr.type)}
                    disabled = {props.disableInfo[ctr.type]}
                />
            )
         }
         <button disabled = {!props.purchasable}
            onClick = {props.purchaseHandler}
            className ={classes.OrderButton}>ORDER NOW
        </button>
        </div>
    )
}
export default BuildControls