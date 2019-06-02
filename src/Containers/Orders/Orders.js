import React, {Component} from 'react'
import Order from '../../Components/Order/Order'
import styles from './Orders.module.css'
import axios from '../../axios-pizza'

class Orders extends Component {
	state={
		orders:[],
		
	}

componentDidMount(){
	axios.get('/order.json')
		 .then(res=>{
		 	const orders=[]
		 	
		 	for(let key in res.data){
		 		orders.push({
		 			...res.data[key],
		 			key:key})
		 	
		 		this.setState({orders:orders})
		 	}
		 	

			})
}
	render(){
		
					
		return (

			<div className={styles.Orders}>
				{this.state.orders.map(order=>{
					return <Order key={order.key} order={order} />
				})}
			</div>

		 	);
	}


}

export default Orders;