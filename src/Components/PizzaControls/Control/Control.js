import React from 'react'
import styles from './Control.module.css'


const control =(props)=>(

		<div className={styles.control}>
		<p></p>
			<div className={styles.borderInBottom}>

				<button className={styles.remove}
					    onClick={props.remove}
					    disabled={props.removeButtonStatus}>
					    Remove
				</button>

				<div className={styles.label}>{props.label}</div>

				<button className={styles.add} 
				        onClick={props.add}
				        disabled={props.addButtonStatus}>
				        Add
				</button>

			</div>
		<p>+ {parseFloat(props.ingCost).toFixed(2) }$</p>
		</div>
		);


export default control;