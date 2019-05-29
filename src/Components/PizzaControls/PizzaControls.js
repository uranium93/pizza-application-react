import React from 'react'
import styles from './PizzaControls.module.css' 
import Control from './Control/Control'
const ING_PRICES = {
		vagies: 0.28,
		corns:0.52,
		meat:1.20,
		mushrooms:1.43
	}

const pizzaControls = (props)=> (
		
		<div className={styles.pizzaControls}>
			<Control label="Corn"
			         add={()=>props.addIngredients("corns")}
			         remove={()=>props.removeIngredients("corns")}
				     ingCost={props.ingList["corns"]*ING_PRICES["corns"]}
				     removeButtonStatus={props.removeButtonsDisable["corns"]}
				     addButtonStatus={props.addButtonsDisable["corns"]}  
				     />

			<Control label="Vagie"
			 	     add={()=>props.addIngredients("vagies")}
					 remove={()=>props.removeIngredients("vagies")}
					 ingCost={props.ingList["vagies"]*ING_PRICES["vagies"]}
					 removeButtonStatus={props.removeButtonsDisable["vagies"]}
					 addButtonStatus={props.addButtonsDisable["vagies"]}  
			         />

			<Control label="Meat"
			    	 add={()=>props.addIngredients("meat")}
			    	 remove={()=>props.removeIngredients("meat")}
					 ingCost={props.ingList["meat"]*ING_PRICES["meat"]}
					 removeButtonStatus={props.removeButtonsDisable["meat"]}
					 addButtonStatus={props.addButtonsDisable["meat"]}  
			         />

			<Control label="Mushroom"
					 add={()=>props.addIngredients("mushrooms")}
					 remove={()=>props.removeIngredients("mushrooms")}
			  		 ingCost={props.ingList["mushrooms"]*ING_PRICES["mushrooms"]}
			  		 removeButtonStatus={props.removeButtonsDisable["mushrooms"]}
			  		 addButtonStatus={props.addButtonsDisable["mushrooms"]} 
			  		 />
			<button className={styles.order} onClick={props.orderMenu}>Order Pizza</button>

		</div>
		);

export default pizzaControls;