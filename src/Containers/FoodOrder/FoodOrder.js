import React , {Component} from 'react'
import styles from './FoodOrder.module.css'
import Supplements from '../../Components/Supplements/Supplements'
import axios from '../../axios-pizza'

/////////////////// prices of all ingredients 

const ING_PRICES = {
		vagies: 0.28,
		corns:0.52,
		meat:1.20,
		mushrooms:1.43
	}

/////////////////// prices of all supplements 
const SUPP_PRICES={
	jus       : 0.75,
	desert    : 1.2,
	chocolate : 0.80,
}
			   ///////////////
//////////////// THE CLASS //////////////////
class FoodOrder extends Component {

state = {
	 supplements : {
					jus : 0,
					desert : 0,
					chocolate : 0,
						},
	totalPrice : null,
	
	}

componentDidMount(){
	let total =0;
	const ing = new URLSearchParams(this.props.location.search) 
	for (let param of ing.entries()){
		total+= param[1]*ING_PRICES[param[0]]
	}
	total=parseFloat(total).toFixed(2)
	this.setState({totalPrice:total})

}	
	/////////////////////////////////////////////////////
///////////////adding supplements to the state //////////////////	

addIng = (adding)=>{
	const prevCount = this.state.supplements[adding];
	const newUpdateIng = {...this.state.supplements};
	newUpdateIng[adding]=prevCount+1;
	const prevPrice = this.state.totalPrice;
	
	let newUpdatePrice = parseFloat(prevPrice) + parseFloat(SUPP_PRICES[adding]);
	newUpdatePrice = parseFloat(newUpdatePrice).toFixed(2);
	this.setState({supplements:newUpdateIng , totalPrice:newUpdatePrice})
}

	    /////////////////////////////////////////////////////
///////////////removing supplements from the state //////////////////	

removeIng = (removeing)=>{
	const prevCount = this.state.supplements[removeing];
	const newUpdateIng = {...this.state.supplements};
	newUpdateIng[removeing]=prevCount-1;
	const prevPrice = this.state.totalPrice;
	
	let newUpdatePrice = parseFloat(prevPrice) - parseFloat(SUPP_PRICES[removeing]);
	newUpdatePrice = parseFloat(newUpdatePrice).toFixed(2);
	this.setState({supplements:newUpdateIng , totalPrice:newUpdatePrice})
}

calculatePrice

render(){
			//////////////////////////////////////////////////////
//////////////disable button from removing less than 0 supplement//////////////
	const removeDisable= {...this.state.supplements};
	for (let key in removeDisable ){
		removeDisable[key]= (removeDisable[key]<=0 )
	}

			//////////////////////////////////////////////////////
//////////////disable button from adding more than 10 supplements//////////////
	const addDisable= {...this.state.supplements};
	for (let key in addDisable ){
		addDisable[key]= (addDisable[key]>=10 )
	}

	return(
		<div>
		<div className={styles.FoodOrder}>
			<Supplements       addIngredients={this.addIng}
							   removeIngredients={this.removeIng}
							   ingList={this.state.supplements}
							   removeButtonsDisable={removeDisable}
							   addButtonsDisable={addDisable}
							   />

		</div>
		<p style={{textAlign:'center'}}>Your finall Cost is : {this.state.totalPrice} </p>
		</div>
		);
}

}

export default FoodOrder;