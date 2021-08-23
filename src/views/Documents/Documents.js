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

							 content = content.replace("![](./", "![]("+ imgUrl)
							 content = content.replace('src="./', 'src="'+ imgUrl)
							 content = content.replace(">](.", ">](" + imgUrl)
							 const tree = markdownToTree(content);

							 let firstKey = Object.keys(tree)[0];
								setContent(elCreator(tree, firstKey));
							 // console.log(content.split('\r')[0])
						})
				}

				function elCreator(dict, key) {
					if (key === '_') {
						let list = []

						dict[key].forEach(el => {
							let content = el;
							console.log(el)
							let start = content.indexOf('[');
							let end = content.indexOf(']');
							content = content.substring(start + 1, end);

							// let urls = 'https://api.github.com/repos/BingFengHung/OpenDocuments/contents/C%23/C%23%20@%20%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95?ref=main';

							// https://github.com/BingFengHung/OpenDocuments/blob/main/C%23/C%23%20%40%20%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/C%23%20%40%20%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.md


							let url = el;
							start = url.indexOf('(');
							end = url.lastIndexOf(')');
							url = url.substring(start + 1, end)
							// url = url.replace(".md", '');
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
									<p onClick={(e) => { 
										let content = e.target.nextElementSibling; 
										if (content.style.display === 'none') { 
											content.style.display = 'block' 
										} else { 
											content.style.display = 'none' 
										}
										}}>{key} 
									 </p> 
									 <div style={{display: 'none'}}> 
									 { 
									 Object.keys(dict[key]).map(el =>elCreator(dict[key], el))
									 }
									 </div>
							</div>
							)
						}
				}

				// let document = data.filter(i => i.name !== "README.md")
				// let list = []
				// document.forEach(el => {
				// 	list.push((<div key={el.name}>
				// 		<p onClick={(e) => {
				// 			fetch(el.url)
				// 			.then(res => res.json())
				// 			.then(data => { 
				// 				var content = e.target.nextElementSibling; 
				// 				if (content.style.display === 'none') { 
				// 					content.style.display = "block" 
				// 					// temp();
				// 				} else { 
				// 					content.style.display = "none" 
				// 				}
				// 			})
				// 		}}>{el.name}</p>
				// 		<div style={{display: 'none'}}>123</div>
				// 	</div>))
				// });

				// setContent(list);
			
				}
			)
	}, [])


	async function getContent(url) {
		const resposne = await fetch(url)
		const json = await resposne.json();
		return json;
	}

	return (
		<div className={styles.container}>
			{/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
			{content}
		</div>
	)
}

export default Documents;