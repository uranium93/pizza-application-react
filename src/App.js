import React , {Component} from 'react';
import Layout from './Components/Layout/Layout'
import FoodBuilder from './Containers/FoodBuilder/FoodBuilder'
import FoodOrder from './Containers/FoodOrder/FoodOrder'
import Orders from './Containers/Orders/Orders'
import {Route , Switch} from 'react-router-dom'

class App extends Component{

  render(){
  	
    return (
      <div>
	      <Layout>
	      <Switch>
	      	<Route path='/build/Pizza' component={FoodOrder} />
	      	<Route path='/orders' component={Orders} />
	      	<Route path='/build' component={FoodBuilder} />

	      </Switch>
	      		
	      		
	      </Layout>
      </div>

      );
  }


}
export default App;
