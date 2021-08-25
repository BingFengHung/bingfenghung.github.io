import styles from './Github.module.css';
import { useEffect, useState } from 'react';
import GithubCard from '../../components/GithubCard/GithubCard';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

function Github() {
	const [repositoyData, setRepositoryData] = useState([])
	const [avatar, setAvatar] = useState()
	const [cssDisplay, setCssDisplay] = useState({
		display: "display",
	});

	useEffect(() => {
		const url = 'https://api.github.com/users/BingFengHung/repos'
		const avatarUrl = 'https://api.github.com/users/BingFengHung'

		async function fetchAvatar(url) {
			const resposne = await fetch(url);
			const json = await resposne.json();
			return json
		}

		async function fetchData(url) {
			const lists = []
			const response = await fetch(url);
			const json = await response.json();

			json.sort((a, b) => {
				let aPushAt = a.pushed_at;
				let bPushAt = b.pushed_at;
				if(aPushAt > bPushAt) {
					return -1;
				} else if (aPushAt < bPushAt) {
					return 1;
				} else {return 0;}
			})

			for (let i of json) {
				if (i.fork !== true) {
					const languages = await fetchLangauges(i.languages_url);
					let total = Object.values(languages).reduce((p, c) => p + c, 0);
					let langObj = {} 
					Object.keys(languages).forEach(lang => {
						langObj[lang] = (parseInt(languages[lang]) / total * 100).toFixed(2)
					});
					
					lists.push(
						<Link to={`./GitContent`} onClick={() => localStorage.setItem("git_content_url", i.contents_url)}> 
						<GithubCard key={i.name} title={i.name} languages={langObj} description={i.description}/> 
						</Link>
					)
				}
			}

			return lists
		}

		fetchAvatar(avatarUrl).then(data => {
			setAvatar(data.avatar_url)
		});

		fetchData(url).then(data => 
			{
				setRepositoryData(data)
				setCssDisplay({display: 'none'})
			})

	}, []);

	async function fetchLangauges(url) {
		const response = await fetch(url);
		const json = await response.json();
		return json;
	}

	return (
		<div className={styles.container}>
			<div> 
				<img className={styles.avatar} src={avatar} alt="bingfeng"/>
				<div>HTML</div>
				<div>CSS</div>
				<div>JavaScript</div>
				<div>C#</div>
				<div>Python</div>
			</div>
			<ul>
				{repositoyData}
			</ul>
			<div style={cssDisplay}> 
				<Loading/>
			</div>
		</div>
	)
}

export default Github;