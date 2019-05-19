import React from 'react'
import styles from './Control.module.css'


const control =(props)=>(

		<div className={styles.control}>
		<p></p>
		<div className={styles.borderInBottom}>
		<button className={styles.remove}>Remove</button>
		<div className={styles.label}>{props.label}</div>
		<button className={styles.add} onClick={props.add}>Add</button>
		</div>
		<p>+ {props.ingCost }</p>
		</div>
		);


export default control;