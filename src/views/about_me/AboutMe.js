import style from './AboutMe.module.css';
import Avatar from '../../components/Avatar/Avatar';
import Introduce from '../../components/Introduce/Introduce';

function AboutMe() {
	return (
		<div className={style.container}>
			<Avatar/>
			<hr></hr>
			<Introduce/>
		</div>
	)
}

export default AboutMe;