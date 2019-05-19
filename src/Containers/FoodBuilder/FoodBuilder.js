import React , {Component} from 'react'
import styles from './FoodBuilder.module.css'
import Pizza from '../../Components/Pizza/Pizza'
import PizzaControls from '../../Components/PizzaControls/PizzaControls'

const ING_PRICES = {
		vagies: 0.28,
		corns:0.52,
		meat:1.20,
		mushrooms:1.43
	}

class FoodBuilder extends Component {
	state = { ingredients : {
		vagies : 0,
		corns : 0,
		meat : 0,
		mushrooms : 0,
		},
		totalPrice:1.5,
	}
addIng = (adding)=>{
	const prevCount = this.state.ingredients[adding];
	const newUpdateIng = {...this.state.ingredients};
	newUpdateIng[adding]=prevCount+1;
	const prevPrice = this.state.totalPrice;
	
	let newUpdatePrice = parseFloat(prevPrice) + parseFloat(ING_PRICES[adding]);
	newUpdatePrice = parseFloat(newUpdatePrice).toFixed(2);
	this.setState({ingredients:newUpdateIng , totalPrice:newUpdatePrice})
}

	
render (){

	return(
		
		<div className={styles.FoodBuilder}>
			<Pizza ing={this.state.ingredients} totalCost={this.state.totalPrice}/>
			<PizzaControls addIngredients={this.addIng} ingList={this.state.ingredients}/>
		</div>
		

	);
}



}
export default FoodBuilder;