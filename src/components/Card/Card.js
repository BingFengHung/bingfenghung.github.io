import styles from './Card.module.css'
import { Link } from 'react-router-dom';

function Card(props) {
	function setLink() { 
		localStorage.setItem("links", props.link);
	}

	return (
		<div className={styles.card}>
			<Link to={
				`./Articles`
				} onClick={setLink}>
				<img src={props.img} alt='alrticle'/>
				<div>
					<h4>{props.title}</h4>
					<p>{props.description}</p>
				</div>
			</Link>
		</div>
	)
}

export default Card;