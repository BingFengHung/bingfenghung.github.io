import styles from './GithubCard.module.css'
import { useState, useEffect } from "react";

function GithubCard(props) {
	const languages = props.languages;
	const [langList, setLangList] = useState([]);

	useEffect(() => {
		let list = []
		const colors = {
			"HTML": '#e34c26',
			"C#": '#178600',
			"CSS": '#563d7c',
			"JavaScript": '#f1e05a',
			"Python": '#3572A5',
			"Vue": '#41b883',
			"PowerShell": "#012456",
			"TypeScript": "#2b7489"
		}

		Object.keys(languages).forEach(element => {
			let contain = (
			<span className={styles.languageStatus}>
				<span className={styles.langDots} style={{backgroundColor: colors[element]}}></span>
				<span style={{marginRight: '5px'}}>{element}</span>
				<span>{languages[element]}{'%'}</span>
				</span>)
			list.push(contain)
		});

		setLangList(list);

	}, [languages]);

	return (
		<div className={styles.container}>
			<p className={styles.title}>{props.title}</p>
			<div className={styles.description}> 
				<p>{props.description}</p>
			</div>
			<ul>
				{langList}
			</ul>
		</div>
	)
}

export default GithubCard;