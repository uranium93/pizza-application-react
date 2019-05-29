import React     from 'react'
import styles    from './Menu.module.css'
//import Backdrop  from '../Ui/Backdrop/Backdrop'

const menu = (props)=>{

	return (
		<div className={styles.menu}>
		{ props.show ? 
			
		<div className={styles.menuItems}>
		<p onClick={props.closeMenu}>X</p>
			<ul>
				<li><a href="/" className={styles.active}>Link 1 </a></li>
				<li><a href="/">Link 2 </a></li>
			</ul>
		</div>
		
		: <p onClick={props.openMenu}> Menu </p> }
		</div>
)
}

export default menu;