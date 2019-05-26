import React from 'react'
import logoPicture from '../../asset/logo.png'
import styles from './Logo.module.css'

const logo = (props)=>(
	<img className={styles.Logo} src={logoPicture} alt="Logo" />

	);

export default logo;