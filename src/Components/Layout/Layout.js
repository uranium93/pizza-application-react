import React from 'react'
import Aux from '../../hoc/Auxiliary'
import styles from './Layout.module.css'
import Logo from '../Logo/Logo'

const layout = (props)=>(
	<Aux>
	<Logo />
		<div> Toolbar , sidedraw , backdrop </div>
		<main className={styles.content}>
		{props.children}
		</main>
	</Aux>
	);

export default layout;