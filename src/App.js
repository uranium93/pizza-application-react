import React , {Component} from 'react';
import {Route , Switch} from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import FoodBuilder from './Containers/FoodBuilder/FoodBuilder'
import FoodOrder from './Containers/FoodOrder/FoodOrder'
import Orders from './Containers/Orders/Orders'


class App extends Component{

  render(){
  	
    return (
      <div>
	      <Layout>
	      <Switch>
	      	<Route path='/build/Pizza' component={FoodOrder} />
	      	<Route path='/orders' component={Orders} />
	      	<Route path='/build' component={FoodBuilder} />
			<Route path='/' render={()=>
			 <div style={{textAlign:'center'}}>
			 Hello, this is a demo food application made
			  by Hanafi abderrahmen<br />
			  feel free to use it and make it better
			  the idea is to use only css for the ui<br />
			  thank you
			  React Js
			  <br />
			  please give us some love in Github  </div>} />

	      </Switch>
	      		
	      		
	      </Layout>
      </div>

      );
  }


}
export default App;
