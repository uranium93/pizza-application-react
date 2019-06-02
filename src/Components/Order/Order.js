import React from 'react'
import styles from './Order.module.css'

const order =(props)=>{

	const pizzaIngredients= Object.entries(props.order.orderIngridietns)
	const pizzaSupplements= Object.entries(props.order.orderSupplements)
	let ingredientsOutput = null;
	let supplementsOutput = null;

	ingredientsOutput= pizzaIngredients.map(ing=>{
		return (
			<span key={ing[0]}>
				<em key={ing[1]}> {ing[1]}  </em> x {ing[0]} 
	 		</span>
			)
	});


	supplementsOutput= pizzaSupplements.map(sup=>{
		return (
			<span key={sup[0]}>
				<em key={sup[1]}>{sup[1]}  </em> x {sup[0]}
			</span>
			)
	});



	return(

		<div className={styles.Order}>
			<p>Pizza with   : {ingredientsOutput}</p>
			<p>Supplements  : {supplementsOutput}</p>
			<span>Total price  : {props.order.orderPrice}</span>
		</div>

	  	)

}
export default order;