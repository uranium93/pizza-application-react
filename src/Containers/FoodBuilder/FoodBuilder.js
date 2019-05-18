import React , {Component} from 'react'
import Aux from '../../hoc/Auxiliary'
import Pizza from '../../Components/Pizza/Pizza'



class FoodBuilder extends Component {
	state = { ingredients : {
		vagies : 1,
		corns : 0,
		meat : 0,
		mushrooms : 0,
		},
	};
render (){

	return(
		<Aux>
			<Pizza ing={this.state.ingredients} />
			<div>BuildController</div>
		</Aux>

	);
}



}
export default FoodBuilder;