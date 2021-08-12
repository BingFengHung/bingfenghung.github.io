import './Header.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
	const [classNameString, setClassNameString] = useState('topnav');

	function myFunction() {
		if (classNameString === 'topnav') {
			setClassNameString(`${classNameString} response`)
		} else {
			setClassNameString(`topnav`);
		}
	}

	return (
		<header>
			<div className="logo">
				<Link className="route" to="/">BingFeng</Link>
			</div>
			<div className={classNameString}> 
			  <button className="icon route" id='menu' onClick={myFunction}>&#9776;</button>
				<Link className="route" to="/AboutMe">關於我</Link>
				<Link className="route" to="/Portfolio">專案項目</Link>
				<Link className="route" to="/Faq">FAQ</Link>
			</div>
		</header>
	)
}

export default Header;