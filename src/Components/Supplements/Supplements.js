import React from 'react'
import Control from '../PizzaControls/Control/Control'
import styles from './Supplements.module.css'
const SUPP_PRICES={
	jus       : 0.75,
	desert    : 1.2,
	chocolate : 0.80,
}

const supplements =(props)=>{


	return (
		
		<div className={styles.Supp}>
					<Control label="Home Jus"
				         add={()=>props.addIngredients("jus")}
				         remove={()=>props.removeIngredients("jus")}
					     ingCost={props.ingList["jus"]*SUPP_PRICES["jus"]}
					     removeButtonStatus={props.removeButtonsDisable["jus"]}
					     addButtonStatus={props.addButtonsDisable["jus"]}  
				     />
				     <Control label="Ymi-ho Desert"
				         add={()=>props.addIngredients("desert")}
				         remove={()=>props.removeIngredients("desert")}
					     ingCost={props.ingList["desert"]*SUPP_PRICES["desert"]}
					     removeButtonStatus={props.removeButtonsDisable["desert"]}
					     addButtonStatus={props.addButtonsDisable["desert"]}  
				     />
				     <Control label="Western chocolate "
				         add={()=>props.addIngredients("chocolate")}
				         remove={()=>props.removeIngredients("chocolate")}
					     ingCost={props.ingList["chocolate"]*SUPP_PRICES["chocolate"]}
					     removeButtonStatus={props.removeButtonsDisable["chocolate"]}
					     addButtonStatus={props.addButtonsDisable["chocolate"]}  
				     />
		</div>


		);
}

export default supplements;