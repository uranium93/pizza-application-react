import React from 'react'
import Aux from '../../hoc/Auxiliary'
import styles from './Layout.module.css'
import Logo from '../Logo/Logo'
import Toolbar from '../Toolbar/Toolbar'

const layout = (props)=>(
	<Aux>
	
		<Toolbar>
		<Logo />
		<div>
		<ul>
			<li><a href="/" className={styles.active}>Link 1 </a></li>
			<li><a href="/">Link 2 </a></li>
		</ul>
		
		
		</div>


		</Toolbar>
		<main className={styles.content}>
		{props.children}
		</main>
	</Aux>
	);

export default layout;