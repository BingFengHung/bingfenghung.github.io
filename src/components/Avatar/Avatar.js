import style from './Avatar.css';

function Avatar() {
	return (
	<div className={style.container}>
		<div className="pic">
			<img className="avatar" src="images/avatar.jpg" alt="BingFengHung"/>
		</div>

		<div className="info">
			<ul>
				<li>洪秉鋒 Joe Hung</li>
				<li>Software Engineer</li>
				<li>joe94008@gmail.com</li>
			</ul>
			<ul className="motto">
				<li>熱愛程式開發</li>
				<li>尋找各種可能</li>
				<li>韌性、不服輸</li>
				<li>具有強烈的好奇心</li>
			</ul>
		</div>
	</div>
	)
}

export default Avatar;