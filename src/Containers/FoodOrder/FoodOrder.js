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
	ingredients:null,
	 supplements : {
					jus : 0,
					desert : 0,
					chocolate : 0,
						},
	totalPrice : null,
	loading:false,

	
	}

componentDidMount(){
	let total =1.5;
	let ingredient={};
	const ing = new URLSearchParams(this.props.location.search) 
	for (let param of ing.entries()){
		total+= param[1]*ING_PRICES[param[0]];
		ingredient[param[0]]=param[1];
	}
	total=parseFloat(total).toFixed(2)
	this.setState({totalPrice:total , ingredients:ingredient})

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

			   //////////////////////////////////////////////////////
//////////////back to pizza builder when click cancel in checkout page//////////////

cancelHandler=()=>{
	this.props.history.goBack();
}

			   //////////////////////////////////////////////////////
//////////////        confirm pizza buying in checkout page    //////////////

confirmHandler =()=>{
	this.setState({loading:true});
	const order={
		orderIngridietns : this.state.ingredients,
		orderSupplements : this.state.supplements,
		orderPrice		 : this.state.totalPrice,
		clientInfo       : {
							name   : 'hanafi',
							adress : 'cite bon accueil n05',
							tel    : '+213552587476',
						    },
		deliveryType    : 'VIP',	

	}
	axios.post('/order.json',order)
		 .then(response=>{
		 	
		 	this.setState({loading:false});
		 	console.log(response)
		 	this.props.history.push('/')
			})
		 .catch(error  =>this.setState({loading:false}))
}






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
		<div className={styles.FoodOrder}>
			<h1> you can add more suppliments</h1>
			<Supplements       
							   addIngredients={this.addIng}
							   removeIngredients={this.removeIng}
							   ingList={this.state.supplements}
							   removeButtonsDisable={removeDisable}
							   addButtonsDisable={addDisable}
							   />

		
		<p className={styles.PriceP}>Your finall Cost is : {this.state.totalPrice} </p>
		<input type="text" name="phone" placeholder ="Phone Number   " />
		<input type="text" name="adress" placeholder="Delevery Adress" />
		<h5>Let it blank to use default number or adress </h5>
		<div className={styles.buttons}>
			<button className={styles.Confirm} onClick={this.confirmHandler}> &#10003; </button>
			<button className={styles.Cancel}  onClick={this.cancelHandler} >    X 	   </button>
		</div>
		</div>
		);
}

}

export default FoodOrder;