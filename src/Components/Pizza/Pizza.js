import React from 'react'
import styles from './Pizza.module.css'


const pizza = props => {

return (
<div className={styles.plate}>
	<div className={styles.pizzabase1}>
	</div>
	<div className={styles.pizzabase2}>
	</div>
	<div className={styles.tomatoes}>
            <div className={styles.tomato1}>
            </div>
            <div className={styles.tomato2}>
            </div>
            <div className={styles.tomato3}>
            </div>
            <div className={styles.tomato4}>
            </div>
            <div className={styles.tomato5}>
            </div>
            <div className={styles.tomato6}>
            </div>
            <div className={styles.tomato7}>
            </div>
            <div className={styles.tomato8}>
            </div>
        </div>


	<div className={styles.slicebase1}>
	</div>
	<div className={styles.slicebase2}>
	</div>
	<div className={styles.tomatoes}>
		<div className={styles.tomato9}>
		</div>
		<div className={styles.tomato10}>
		</div>
	</div>
	<div className={styles.pizzabite}>
		<div className={styles.bitecircle1}>
		</div>
		<div className={styles.bitecircle2}>
		</div>
		<div className={styles.bitecircle3}>
		</div>
	</div>

</div>


	);

}

export default pizza ;