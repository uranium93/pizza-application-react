import React     from 'react'
import {NavLink} from 'react-router-dom'
import styles    from './Menu.module.css'



const menu = (props)=>{

	return (
		<div className={styles.menu}>
		{ props.show ? 
			
		<div className={styles.menuItems}>
		<p onClick={props.closeMenu}>X</p>
			<ul onClick={props.closeMenu} >
				<li><NavLink to="/build" >Order Pizza </NavLink></li>
				<li><NavLink to="/orders">Orders List </NavLink></li>
			</ul>
		</div>
		
		: <p onClick={props.openMenu} className={styles.menuTag}> Menu </p> }
		</div>
)
}

export default menu;