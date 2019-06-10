import React, { Component } from 'react'
import { connect } from 'react-redux'

import styles from './FoodBuilder.module.css'
import Pizza from '../../Components/Pizza/Pizza'
import PizzaControls from '../../Components/PizzaControls/PizzaControls'
import Modal from '../../Components/Ui/Modal/Modal'
import Loading from '../../Components/Ui/Loading/Loading'
import Backdrop from '../../Components/Ui/Backdrop/Backdrop'
import Aux from '../../hoc/Auxiliary'
import errors from '../../hoc/Errors'
import axios from '../../axios-pizza'


import * as foodBuilderActions from '../../store/actions/index'

/////////////////// prices of all ingredients 

const ING_PRICES = {
	vagies: 0.28,
	corns: 0.52,
	meat: 1.20,
	mushrooms: 1.43
}

///////////////////////////////////////////////////////////////////////////////
///////the class foodbuilder taht will manipulate the state of our pizza //////
class FoodBuilder extends Component {
	state = {
		showMenu: false,
		backdrop: false,
		loading: false
	}

	componentWillMount() {
		this.props.initIngredient();

	}
	/////////////////////////////////////////////////////
	///////////////   minpulate the order area  //////////////////	
	showOrderMenu = () => {
		this.setState({ showMenu: true });
		this.setState({ backdrop: true })
	}

	hideOrderMenu = () => {
		this.setState({ showMenu: false });
	}

	confirmOrder = () => {
		this.props.history.push('build/Pizza')
	}

	cancelOrder = () => {
		this.hideOrderMenu();
		this.hideBackdrop();
	}

	hideBackdrop = () => {
		this.setState({ backdrop: false })
		this.hideOrderMenu();
	}
	/////////////////////////////////////////////////////
	///////////////  rendering the JSX code  //////////////////	
	render() {
		//////////////////////////////////////////////////////
		//////////////disable button from removing less than 0 ingredietns//////////////
		const removeDisable = { ...this.props.ing };
		for (let key in removeDisable) {
			removeDisable[key] = (removeDisable[key] <= 0)
		}

		//////////////////////////////////////////////////////
		//////////////disable button from adding more than 2 ingredietns//////////////
		const addDisable = { ...this.props.ing };
		for (let key in addDisable) {
			addDisable[key] = (addDisable[key] >= 2)
		}

		//////////////////////////////////////////////////////
		//////////////  show and hide the order menu on click event  //////////////	
		let show = null
		if (this.state.showMenu) {
			show =
				<Modal>
					{this.state.loading ? <Loading /> :	//show loading or contenet 	
						<Aux>
							<h1>your Pizza order is :</h1>
							<p>Mushrooms : {this.props.ing.mushrooms * ING_PRICES.mushrooms}</p>
							<p>Vagies    : {this.props.ing.vagies * ING_PRICES.vagies}</p>
							<p>Corn      : {this.props.ing.corns * ING_PRICES.corns}</p>
							<p>Meat      : {this.props.ing.meat * ING_PRICES.meat}</p>

							<p><strong>    price  :     {this.props.price} </strong></p>
							<button className={styles.confirm} onClick={this.confirmOrder} >confirm </button>
							<button className={styles.cancel} onClick={this.cancelOrder} >cancel  </button>
						</Aux>
					}
				</Modal>

		}
		//////////////////////////////////////////////////////
		////////////// show and hide the backdrop in eevnt condition //////////////	
		let backdrop = null
		if (this.state.backdrop) {
			backdrop = <Backdrop hide={this.hideBackdrop} />
		}

		//////////////////////////////////////////////////////
		//////////////             returning the JSX code             //////////////	
		return (

			<Aux>
				{backdrop}
				{show}

				<div className={styles.FoodBuilder}>

					<Pizza ing={this.props.ing} totalCost={this.props.price} />
					<PizzaControls addIngredients={this.props.addIngredient}
						removeIngredients={this.props.removeIngredient}
						ingList={this.props.ing}
						removeButtonsDisable={removeDisable}
						addButtonsDisable={addDisable}
						orderMenu={this.showOrderMenu} />
				</div>

			</Aux>
		);
	}



}


const mapStateToProps = state => {
	return {
		ing: state.foodBuilderReducer.ingredients,
		price: state.foodBuilderReducer.totalPrice
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addIngredient: (ingName) => dispatch(foodBuilderActions.addIngredient(ingName)),
		removeIngredient: (ingName) => dispatch(foodBuilderActions.removeIngredient(ingName)),
		initIngredient: () => dispatch(foodBuilderActions.initIngredients())
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(errors(FoodBuilder, axios));