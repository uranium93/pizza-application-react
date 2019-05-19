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
			<Control label="Corn"     add={()=>props.addIngredients("corns")} 
				     ingCost={props.ingList["corns"]*ING_PRICES["corns"]}     />
			<Control label="Vagie"	  add={()=>props.addIngredients("vagies")}
					 ingCost={props.ingList["vagies"]*ING_PRICES["vagies"]}     />
			<Control label="Meat" 	  add={()=>props.addIngredients("meat")}
					 ingCost={props.ingList["meat"]*ING_PRICES["meat"]}       />
			<Control label="Mushroom" add={()=>props.addIngredients("mushrooms")}
			  		 ingCost={props.ingList["mushrooms"]*ING_PRICES["mushrooms"]}/>

		</div>
		);

export default pizzaControls;