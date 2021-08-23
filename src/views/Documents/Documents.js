import { useEffect, useState } from 'react';
import styles from './Documents.module.css'
import markdownToTree from '../../utils/markdownToTree'
import { Link } from 'react-router-dom';


const Documents = () => {
	const [content, setContent] = useState("");

	useEffect(() => {
		const url = 'https://api.github.com/repos/BingFengHung/OpenDocuments/contents'

		fetch(url)
			.then(res => res.json())
			.then(async data => {
				let readme = data.find(i => i.name === "README.md");

				if (readme) {
					let branch = readme.url;
					branch = branch.substring(branch.indexOf("ref=")).replace("ref=", "");

					fetch(readme.url)
						.then(res => res.json())
						.then(data => {
							let base64 = data.content
							let content = decodeURIComponent(escape(atob(base64)));
							let imgUrl = url.replace("https://api.github.com/repos", "https://raw.githubusercontent.com");
							imgUrl = imgUrl.replace("contents", branch + "/")

							content = content.replace("![](./", "![](" + imgUrl)
							content = content.replace('src="./', 'src="' + imgUrl)
							content = content.replace(">](.", ">](" + imgUrl)
							const tree = markdownToTree(content);
							let firstKey = Object.keys(tree)[0];
							setContent(elCreator(tree, firstKey));
						})
				}

				function elCreator(dict, key) {
					if (key === '_') {
						let list = []

						dict[key].forEach(el => {
							let content = el;
							let start = content.indexOf('[');
							let end = content.indexOf(']');
							content = content.substring(start + 1, end);

							let url = el;
							start = url.indexOf('(');
							end = url.lastIndexOf(')');
							url = url.substring(start + 1, end)
							url = url.replace("https://github.com/BingFengHung/OpenDocuments/blob/main", "https://api.github.com/repos/BingFengHung/OpenDocuments/contents")
							url += "?ref=main"

							list.push(
								<li>
									<Link to='./DocumentContent' onClick={() => {
										localStorage.setItem('git_content_url', url)
									}}>{content}</Link>
								</li>
							)
						})

						return (<ul>{list}</ul>)
					}

					if (dict[key]) {
						return (
							<div>
								<p className={styles.title} onClick={(e) => {
									let content = e.target.nextElementSibling;
									if (content.style.display === 'none') {
										content.style.display = 'block'
									} else {
										content.style.display = 'none'
									}
								}}>{ 
									removeRepeated(key)
								}
								</p>
								<div style={{ display: 'none' }}>
									{
										Object.keys(dict[key]).map(el => elCreator(dict[key], el))
									}
								</div>
							</div>
						)
					}
				}
			}
			)
	}, [])

	function removeRepeated(str) {
		let repeat = str[0]
		for (let c = 0; c < str.length; c++) {
			if (repeat[c] === str[c+1]) {
				repeat += str[c];
				console.log(repeat)
			} else {
				break;
			}
		}

		return str.replace(repeat, ' ');
	}

	return (
		<div className={styles.container}>
			{/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
			<a href='https://github.com/BingFengHung/OpenDocuments'>OpenDOcuments</a>
			{content}
		</div>
	)
}


export default Documents;