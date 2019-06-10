import React , {Component} from 'react'
import Aux				   from './Auxiliary'
import Modal               from '../Components/Ui/Modal/Modal'
import Backdrop            from '../Components/Ui/Backdrop/Backdrop'

const errors = (Content,axios)=>{
	return class extends Component{
		state={
			anError:null,
		}


		componentWillMount(){
			this.responseError = axios.interceptors.response.use(res=>res,error=>{
				this.setState({anError:error})
				console.log("error")
				
			})
			this.requestError = axios.interceptors.request.use(req=>{
				this.setState({anError:null});
				return req;
			})
		};

		/*componentWillUnmount(){
			axios.interceptors.response.eject(this.responseError);
			axios.interceptors.request.eject(this.requestError);

		}*/


		hide =()=>{
			this.setState({anError:null})
		};



		render(){
			let cont = <Content {...this.props} /> ;
			if(this.state.anError){
				
				cont = 
				<Aux>
				
				<Backdrop hide={this.hide}/>
				<Modal >
					{this.state.anError.message}
				</Modal>
				</Aux> ;
			}
			return (
				<Aux>
				
				{cont}
				</Aux>
			)
			
				
				
			
		};

	}
}
export default errors;