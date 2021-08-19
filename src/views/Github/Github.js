import styles from './Github.module.css';
import { useEffect, useState } from 'react';
import GithubCard from '../../components/GithubCard/GithubCard';

function Github() {
	const [repositoyData, setRepositoryData] = useState([])
	const [avatar, setAvatar] = useState()

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

			for (let i of json) {
				if (i.fork !== true) {
					const languages = await fetchLangauges(i.languages_url);
					let total = Object.values(languages).reduce((p, c) => p + c, 0);
					let langObj = {} 
					Object.keys(languages).forEach(lang => {
						langObj[lang] = (parseInt(languages[lang]) / total * 100).toFixed(2)
					});
					lists.push(<GithubCard key={i.name} title={i.name} languages={langObj}
					description={i.description}/>)
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
			})

	}, []);

	async function fetchLangauges(url) {
		const response = await fetch(url);
		const json = await response.json();
		return json;
	}

	return (
		<div className={styles.container}>
			<img className={styles.avatar} src={avatar} alt="bingfeng"/>
			<ul>
				{repositoyData}
			</ul>
		</div>
	)
}

export default Github;