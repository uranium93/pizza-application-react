import React , {Component}  from 'react'
import Aux 	    			from '../../hoc/Auxiliary'
import styles   			from './Layout.module.css'
import Logo	    			from '../Logo/Logo'
import Toolbar  			from '../Toolbar/Toolbar'
import Menu     			from '../Menu/Menu'

class layout extends Component{
state ={
	showMenu:false,
}

 closeMenuFunction =()=>{
	this.setState({showMenu:false});
}
 openMenuFunction =()=>{
	this.setState({showMenu:true});
}
render(){

return (


		<Aux>
		
			<Toolbar>
			<Logo />
			<div className={styles.navItems}>
				<ul>
					<li><a href="/" className={styles.active}>Link 1 </a></li>
					<li><a href="/">Link 2 </a></li>
				</ul>
			</div>
			<Menu show={this.state.showMenu} openMenu={this.openMenuFunction} closeMenu={this.closeMenuFunction}/>

			</Toolbar>
			<main className={styles.content}>
			{this.props.children}
			</main>
		</Aux>
	

	)
}
	
}
export default layout;