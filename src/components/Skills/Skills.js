import style from './Skills.module.css'

function Skills(props) {
	return (
		<div className={style.container}>
			<p>{props.skillName}</p>
			<div className={`${style.rate} ${style[`rate${props.rate}`]}`}></div>
		</div>
	)
}

export default Skills;