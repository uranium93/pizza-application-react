import React , {Component} from 'react';
import Layout from './Components/Layout/Layout'
import FoodBuilder from './Containers/FoodBuilder/FoodBuilder'

class App extends Component{

  render(){

    return (
      <div>
	      <Layout>
	      		<FoodBuilder />
	      </Layout>
      </div>

      );
  }


}
export default App;
