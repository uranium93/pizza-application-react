import React , {Component} from 'react'
import Aux from '../../hoc/Auxiliary'
import Pizza from '../../Components/Pizza/Pizza'



class FoodBuilder extends Component {
render (){

	return(
		<Aux>
			<Pizza />
			<div>BuildController</div>
		</Aux>

	);
}



}
export default FoodBuilder;