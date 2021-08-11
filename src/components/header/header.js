import './header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div>
			<div className="logo">
				<Link to="/">BingFeng</Link>
			</div>
			<div className="topnav">
				<Link to="/AboutMe">關於我</Link>
				<Link to="/Portfolio">專案項目</Link>
				<Link to="/Faq">FAQ</Link>
			</div>
		</div>
	)
}

export default Header;