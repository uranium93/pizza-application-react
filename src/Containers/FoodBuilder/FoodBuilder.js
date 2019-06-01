import React , {Component} from 'react'
import styles              from './FoodBuilder.module.css'
import Pizza               from '../../Components/Pizza/Pizza'
import PizzaControls       from '../../Components/PizzaControls/PizzaControls'
import Modal               from '../../Components/Ui/Modal/Modal'
import Loading             from '../../Components/Ui/Loading/Loading'
import Backdrop            from '../../Components/Ui/Backdrop/Backdrop'
import Aux                 from '../../hoc/Auxiliary'
import axios               from '../../axios-pizza'
import errors              from '../../hoc/Errors'

/////////////////// prices of all ingredients 

const ING_PRICES = {
		vagies: 0.28,
		corns:0.52,
		meat:1.20,
		mushrooms:1.43
	}

///////////////////////////////////////////////////////////////////////////////
///////the class foodbuilder taht will manipulate the state of our pizza //////
class FoodBuilder extends Component {
	state = {
	 ingredients : {
					vagies : 0,
					corns : 0,
					meat : 0,
					mushrooms : 0,
					},
	 totalPrice  : 1.5,
	 showMenu    : false,
	 backdrop    : false,
	 loading     : false
	}
	/////////////////////////////////////////////////////
///////////////adding ingredients to the state //////////////////	

addIng = (adding)=>{
	const prevCount = this.state.ingredients[adding];
	const newUpdateIng = {...this.state.ingredients};
	newUpdateIng[adding]=prevCount+1;
	const prevPrice = this.state.totalPrice;
	
	let newUpdatePrice = parseFloat(prevPrice) + parseFloat(ING_PRICES[adding]);
	newUpdatePrice = parseFloat(newUpdatePrice).toFixed(2);
	this.setState({ingredients:newUpdateIng , totalPrice:newUpdatePrice})
}

	    /////////////////////////////////////////////////////
///////////////removing ingredients from the state //////////////////	

removeIng = (removeing)=>{
	const prevCount = this.state.ingredients[removeing];
	const newUpdateIng = {...this.state.ingredients};
	newUpdateIng[removeing]=prevCount-1;
	const prevPrice = this.state.totalPrice;
	
	let newUpdatePrice = parseFloat(prevPrice) - parseFloat(ING_PRICES[removeing]);
	newUpdatePrice = parseFloat(newUpdatePrice).toFixed(2);
	this.setState({ingredients:newUpdateIng , totalPrice:newUpdatePrice})
}

	/////////////////////////////////////////////////////
///////////////   minpulate the order area  //////////////////	
showOrderMenu = ()=>{
	
	this.setState({showMenu:true});
	this.setState({backdrop:true})

}
hideOrderMenu = ()=>{
	
	this.setState({showMenu:false});

}
confirmOrder =()=>{
	 
	const ingQuery= [];
	for(let key in this.state.ingredients){
		ingQuery.push(encodeURIComponent(key)+'='+encodeURIComponent(this.state.ingredients[key]))
	}
	const query = ingQuery.join('&')

	this.props.history.push({
		pathname:'orderPizza',
		search:query

		})
	console.log(this.props.history)
	
}
cancelOrder = ()=>{
this.hideOrderMenu();
this.hideBackdrop();
}

hideBackdrop = ()=>{
this.setState({backdrop:false})
this.hideOrderMenu();
}

	/////////////////////////////////////////////////////
///////////////  rendering the JSX code  //////////////////	
render (){
	
			//////////////////////////////////////////////////////
//////////////disable button from removing less than 0 ingredietns//////////////
	const removeDisable= {...this.state.ingredients};
	for (let key in removeDisable ){
		removeDisable[key]= (removeDisable[key]<=0 )
	}

			//////////////////////////////////////////////////////
//////////////disable button from adding more than 2 ingredietns//////////////
	const addDisable= {...this.state.ingredients};
	for (let key in addDisable ){
		addDisable[key]= (addDisable[key]>=2 )
	}

			//////////////////////////////////////////////////////
//////////////  show and hide the order menu on click event  //////////////	
	let show = null
	if (this.state.showMenu){
		 show = 
			<Modal>
			{this.state.loading ? <Loading /> :	//show loading or contenet 	
				<Aux>
				<h1>your Pizza order is :</h1> 
				<p>Mushrooms : {this.state.ingredients.mushrooms * ING_PRICES.mushrooms}</p>
				<p>Vagies    : {this.state.ingredients.vagies * ING_PRICES.vagies}</p>
				<p>Corn      : {this.state.ingredients.corns * ING_PRICES.corns}</p>
				<p>Meat      : {this.state.ingredients.meat * ING_PRICES.meat}</p>
				
	   			<p><strong>    price  :     {this.state.totalPrice} </strong></p>
				<button className={styles.confirm} onClick={this.confirmOrder} >confirm </button>
				<button className={styles.cancel } onClick={this.cancelOrder} >cancel  </button>
				</Aux>
			}
		</Modal>
		
	}
			//////////////////////////////////////////////////////
////////////// show and hide the backdrop in eevnt condition //////////////	
	let backdrop=null
	if(this.state.backdrop){
		backdrop=<Backdrop hide={this.hideBackdrop}/>
	}

			//////////////////////////////////////////////////////
//////////////             returning the JSX code             //////////////	
	return(

	<Aux>
		{backdrop}
		{show}

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
export default errors(FoodBuilder,axios);