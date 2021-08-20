import { useEffect, useState } from 'react';
import styles from './Documents.module.css'
import { marked } from '../../utils/markdonw'	

const Documents = () => {
	const [content, setContent] = useState("");
	useEffect(() => {
		const url = 'https://api.github.com/repos/BingFengHung/OpenDocuments/contents'

		fetch(url)
			.then(res => res.json())
			.then(async data => {
				let readme = data.find(i => i.name === "README.md");

				if (readme) {
					// 取得分支名稱
					let branchName = readme.url;
					branchName = branchName.substring(branchName.indexOf("ref=")).replace("ref=", "");

					fetch(readme.url)
						.then(res => res.json())
						.then(data => {
							let base64 = data.content
							let content = decodeURIComponent(escape(atob(base64)));
							let imgUrl = url.replace("https://api.github.com/repos", "https://raw.githubusercontent.com");
							imgUrl = imgUrl.replace("contents", branchName + "/")

							content = content.replace("![](./", "![](" + imgUrl)
							content = content.replace('src="./', 'src="' + imgUrl)
							content = content.replace(">](.", ">](" + imgUrl)
							// https://github.com/BingFengHung/OpenDocuments/blob/main/C%23/C%23%20sbyte%20%E9%99%A3%E5%88%97%E8%BD%89%E7%82%BA%20string/C%23%20sbyte%20%E9%99%A3%E5%88%97%E8%BD%89%E7%82%BA%20string.md
							let html = '';
							try {
								console.log(content)
								// let re = /\[.*?\]\(.*?\)/gmi;
								// let matches = content.match(re); 
							
								// matches.forEach(i => {
								// 	let re2 = /\[.*?\]/i;
								// 	let list = i.match(re2)[0];
								// 	console.log(list)
								// 	list = list.replace("[", "")
								// 	list = list.replace("]", "")
								// 	content = content.replace(i, list)
								// })
								 console.log(marked(content))
								 html = marked(content)
								// let re = /\<a.*?\>.*?\<\/a\>/gmi;
								let res = /href=[\"|\'].*?[\"|\']/gmi;
								html.match(res)
								let matchess = html.match(res)
								matchess.forEach(i => {
									console.log('inin' + i) 
									// <Link to={`./GitContent`} onClick={() => localStorage.setItem("git_content_url", i.contents_url)}> 

									let temp = "https://api.github.com/repos/BingFengHung/OpenDocuments/contents/"
									let md = i.replace("https://github.com/BingFengHung/OpenDocuments/blob/main/", temp);
									md = md.replace(".md", "");
									md = md.replace("href=", "");
									md = md.replaceAll("\"", "\'");
									let replaceTo = `<a href='./GitContent' onClick="(e) => {
										e.preventDefault();
										localStorage.setItem('git_content_url', ${md})
									}"`
									console.log(replaceTo)
									console.log(html)
									https://github.com/BingFengHung/OpenDocuments/blob/main/
									html = html.replace(i, replaceTo);
									console.log(html)
								})

								setContent(marked(html))
							} catch (error) {
								setContent("")
							}
						})
				}

				
			})
	}, [])


	async function getContent(url) {
		const resposne = await fetch(url)
		const json = await resposne.json();
		return json;
	}

	return (
		<div className={styles.container}>
			<div dangerouslySetInnerHTML={{ __html: content }}>
			</div>
		</div>
	)
}

export default Documents;