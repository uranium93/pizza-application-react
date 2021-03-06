import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './FoodOrder.module.css'
import Supplements from '../../Components/Supplements/Supplements'
import axios from '../../axios-pizza'
import errors from '../../hoc/Errors'
import Loading from '../../Components/Ui/Loading/Loading'
import * as foodOrderActios from '../../store/actions/index'

/////////////////// prices of all ingredients 

const ING_PRICES = {
	vagies: 0.28,
	corns: 0.52,
	meat: 1.20,
	mushrooms: 1.43
}

/////////////////// prices of all supplements 
const SUPP_PRICES = {
	jus: 0.75,
	desert: 1.2,
	chocolate: 0.80,
}
///////////////
//////////////// THE CLASS //////////////////
class FoodOrder extends Component {

	state = {

		supplements: {
			jus: 0,
			desert: 0,
			chocolate: 0,
		},
		totalPrice: this.props.price,
		orderInfo: {
			phone: {
				minLength: 13,
				value: '',
				valide: true,

			},
			adress: {
				minLength: 10,
				value: '',
				valide: true,

			},

		},



	}


	/////////////////////////////////////////////////////
	///////////////adding supplements to the state //////////////////	

	addIng = (adding) => {
		const prevCount = this.state.supplements[adding];
		const newUpdateIng = { ...this.state.supplements };
		newUpdateIng[adding] = prevCount + 1;
		const prevPrice = this.state.totalPrice;

		let newUpdatePrice = parseFloat(prevPrice) + parseFloat(SUPP_PRICES[adding]);
		newUpdatePrice = parseFloat(newUpdatePrice).toFixed(2);
		this.setState({ supplements: newUpdateIng, totalPrice: newUpdatePrice })
	}

	/////////////////////////////////////////////////////
	///////////////removing supplements from the state //////////////////	

	removeIng = (removeing) => {
		const prevCount = this.state.supplements[removeing];
		const newUpdateIng = { ...this.state.supplements };
		newUpdateIng[removeing] = prevCount - 1;
		const prevPrice = this.state.totalPrice;

		let newUpdatePrice = parseFloat(prevPrice) - parseFloat(SUPP_PRICES[removeing]);
		newUpdatePrice = parseFloat(newUpdatePrice).toFixed(2);
		this.setState({ supplements: newUpdateIng, totalPrice: newUpdatePrice })
	}

	//////////////////////////////////////////////////////
	//////////////back to pizza builder when click cancel in checkout page//////////////

	cancelHandler = () => {
		this.props.history.goBack();
	}

	//////////////////////////////////////////////////////
	//////////////        confirm pizza buying in checkout page    //////////////

	confirmHandler = () => {
		this.setState({ loading: true });
		let phoneNumber = this.state.orderInfo.phone.value;
		let adress = this.state.orderInfo.adress.value;
		if (phoneNumber === '') {
			phoneNumber = 'default phone Number'
		}
		if (adress === '') {
			adress = 'default adress'
		}
		const clientInfo = {
			phoneNumber: phoneNumber,
			adress: adress,
		}
		const order = {
			orderIngridietns: this.props.ing,
			orderSupplements: this.state.supplements,
			orderPrice: this.state.totalPrice,
			clientInfo: clientInfo,

		}

		this.props.onSendingOrder(order,this.props.history);
		
	}



	onchangeHandler = (event, type) => {
		const info = { ...this.state.orderInfo }
		let isValide = true;
		const value = event.target.value;
		isValide = !(value.length < info[type].minLength && value.length > 0)
		info[type].valide = isValide;
		info[type].value = value;
		this.setState({ clientInfo: info })


	}


	render() {
		//////////////////////////////////////////////////////
		//////////////disable button from removing less than 0 supplement//////////////
		const removeDisable = { ...this.state.supplements };
		for (let key in removeDisable) {
			removeDisable[key] = (removeDisable[key] <= 0)
		}

		//////////////////////////////////////////////////////
		//////////////disable button from adding more than 10 supplements//////////////
		const addDisable = { ...this.state.supplements };
		for (let key in addDisable) {
			addDisable[key] = (addDisable[key] >= 10)
		}
		let disabled = false;
		disabled = !(this.state.orderInfo['phone'].valide && this.state.orderInfo['adress'].valide)
		return (


			<div className={styles.FoodOrder}>
				{this.props.loading ? <Loading /> :
					<div>
						<h1> you can add more suppliments</h1>
						<Supplements
							addIngredients={this.addIng}
							removeIngredients={this.removeIng}
							ingList={this.state.supplements}
							removeButtonsDisable={removeDisable}
							addButtonsDisable={addDisable}
						/>


						<p className={styles.PriceP}>Your finall Cost is : {this.state.totalPrice} </p>
						<input className={this.state.orderInfo['phone'].valide ? "valide" : styles.unvalide}
							type="text"
							name="phone"
							placeholder="Phone Number   "
							onChange={(event) => this.onchangeHandler(event, "phone")} />
						<input className={this.state.orderInfo['adress'].valide ? "valide" : styles.unvalide}
							type="text"
							name="adress"
							placeholder="Delevery Adress"
							onChange={(event) => this.onchangeHandler(event, "adress")} />
						<h5>Let it blank to use default number or adress </h5>
						<div className={styles.buttons}>
							{console.log(disabled)}
							<button className={styles.Confirm} onClick={this.confirmHandler} disabled={disabled}> &#10003; </button>
							<button className={styles.Cancel} onClick={this.cancelHandler} >    X 	   </button>
						</div>

					</div>



				}
			</div>

		);
	}

}

const mapStateToProps = state => {
	return {
		ing: state.foodBuilderReducer.ingredients,
		price: state.foodBuilderReducer.totalPrice,
		loading: state.foodOrderReducer.loading
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		onSendingOrder :(order,history)=> dispatch(foodOrderActios.sendingOrder(order,history))
	}

}
export default connect(mapStateToProps,mapDispatchToProps)(errors(FoodOrder, axios));