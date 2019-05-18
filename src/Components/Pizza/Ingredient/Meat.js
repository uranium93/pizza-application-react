import React from 'react'
import styles from './Ingredient.module.css'

const meat = props => {

	return (
		<div className={styles.meats } style={props.inlineStyle}>
			<div className={styles.meat1}></div>
			<div className={styles.meat2}></div>
			<div className={styles.meat3}></div>
			<div className={styles.meat4}></div>
			<div className={styles.meat5}></div>

		</div>

		);
}
export default meat;