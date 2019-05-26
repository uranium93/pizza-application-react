import React from 'react'
import styles from './Pizza.module.css'
import Vegies from './Ingredient/Vegies'
import Corns from './Ingredient/Corns'
import Mushrooms from './Ingredient/Mushrooms'
import Meat from './Ingredient/Meat'
import Aux from '../../hoc/Auxiliary'


const pizza = props => {
	//'rotate('+Math.floor(Math.random()* 30 * i)+'deg)'
	
	let rotate = null;
	const ing = Object.keys(props.ing)
	.map(igkey=>{
		return [...Array(props.ing[igkey])].map((_,i)=>{
			rotate ={		transform : 'rotate('+5*i+'deg)'	} 
			if(igkey==="vagies"){
				return <Vegies key={igkey + i} inlineStyle={rotate} />
			}else if (igkey==="corns"){
				return <Corns key={igkey + i} inlineStyle={rotate} />
			}else if(igkey==="meat"){
				return <Meat key={igkey + i} inlineStyle={rotate} />
			}else if(igkey==="mushrooms"){
				return <Mushrooms key={igkey + i} inlineStyle={rotate} />
			}else return null;
		})
	}).reduce((arr,el)=>{
		return arr.concat(el);
	},[]);
	console.log(ing)

return (
<Aux>
<div className={styles.pizza}>
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
	{/* -----------------------------------------------------------------------------
	 	Up i maked the pizza template with tomato 
	    Down the dynamic adding of ingerients
	    -----------------------------------------------------------------------------   
		{props.vagies ? <Vegies /> : null }
		{props.corns ? <Corns /> :null}
		{props.mushrooms ? <Mushrooms /> : null}
		{props.meat ? <Meat /> : null }

	{/* -----------------------------------------------------------------------------
		Up the dynamic adding of ingerients
		down i maked the slices and bite with tomato to the right of  template
		-----------------------------------------------------------------------------  */}
		{ ing  }
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
</div>
{ <p className={styles.myp}> {props.totalCost}$</p> }

</Aux>
	);

}

export default pizza ;