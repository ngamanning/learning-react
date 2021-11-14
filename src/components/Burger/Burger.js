import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
const burger = (props) => {
    const transformIngredients = Object.keys(props.ingredients)
    .map( ingredientKey => {
            return [...Array(props.ingredients[ingredientKey])]
            .map((_,value) =>{
                return (
                    <BurgerIngredients key={ingredientKey + value}
                    type = {ingredientKey}/>
                )
            })
        }       
    )

    return(
        <div className = {classes.Burger}>
            <BurgerIngredients type='bread-top'/>
            {transformIngredients}
            <BurgerIngredients type='bread-bottom'/>
        </div>
    )
}

export default burger;