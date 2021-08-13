import styles from './Card.module.css'

function Card(props) {
	return (
		<div className={styles.card}>
			<a href = './Articles/data.html'>
				<img src={props.img} alt='alrticle'/>
				<div>
					<h4>{props.title}</h4>
					<p>{props.description}</p>
				</div>
			</a>
		</div>
	)
}

export default Card;