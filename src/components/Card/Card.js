import './Card.css'

function Card(props) {
	return (
		<div className='card'>
			<a href = './Articles/data.html'>
				<img src={props.img} alt='alrticle'/>
				<div className='card-content'>
					<h4>{props.title}</h4>
					<p>{props.description}</p>
				</div>
			</a>
		</div>
	)
}

export default Card;