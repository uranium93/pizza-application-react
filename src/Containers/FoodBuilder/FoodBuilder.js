import React , {Component} from 'react'
import styles from './FoodBuilder.module.css'
import Pizza from '../../Components/Pizza/Pizza'
import PizzaControls from '../../Components/PizzaControls/PizzaControls'
import Modal from'../../Components/Ui/Modal/Modal'
import Aux from '../../hoc/Auxiliary'

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

removeIng = (removeing)=>{
	const prevCount = this.state.ingredients[removeing];
	const newUpdateIng = {...this.state.ingredients};
	newUpdateIng[removeing]=prevCount-1;
	const prevPrice = this.state.totalPrice;
	
	let newUpdatePrice = parseFloat(prevPrice) - parseFloat(ING_PRICES[removeing]);
	newUpdatePrice = parseFloat(newUpdatePrice).toFixed(2);
	this.setState({ingredients:newUpdateIng , totalPrice:newUpdatePrice})
}

showOrderMenu = ()=>{

}
render (){
	const removeDisable= {...this.state.ingredients};
	for (let key in removeDisable ){
		removeDisable[key]= (removeDisable[key]<=0 )
	}

	const addDisable= {...this.state.ingredients};
	for (let key in addDisable ){
		addDisable[key]= (addDisable[key]>=2 )
	}

	return(

	<Aux>

		<Modal>		
			<h1>your Pizza:</h1> 
			<p>Corn : {this.state.ingredients.corns * ING_PRICES.corns}</p>
			<p>Vagies : {this.state.ingredients.vagies * ING_PRICES.vagies}</p>
			<p>Meat : {this.state.ingredients.meat * ING_PRICES.meat}</p>
			<p>Mushrooms : {this.state.ingredients.mushrooms * ING_PRICES.mushrooms}</p>
		</Modal>

		<div className={styles.FoodBuilder}>
		
			<Pizza ing={this.state.ingredients} totalCost={this.state.totalPrice}/>
			<PizzaControls addIngredients={this.addIng}
						   removeIngredients={this.removeIng}
						   ingList={this.state.ingredients}
						   removeButtonsDisable={removeDisable}
						   addButtonsDisable={addDisable}
						   orderMenu={this.showOrderMenu} />
		</div>
		
	</Aux>
	);
}



}
export default FoodBuilder;