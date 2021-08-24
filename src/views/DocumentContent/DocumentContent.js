import styles from './DocumentContent.module.css';
import { useEffect, useState } from "react";
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css';

marked.setOptions({
	renderer: new marked.Renderer(),
	highlight: function (code) {
		return hljs.highlightAuto(code).value;
	},
	gfm: true,
	pedantic: false,
	sanitize: false,
	tables: true,
	breaks: true,
	smartLists: true,
	smartypants: true,
});

const GitContent = () => {
	const [content, setContent] = useState("");

	useEffect(() => {
		let url = localStorage.getItem("git_content_url");
		let first = url.lastIndexOf('/')
		url = url.substring(0, first)
		// let second = url.lastIndexOf('/')
		//url = url.substring(0, second)

		// https://raw.githubusercontent.com/BingFengHung/OpenDocuments/main/C%23/C%23%20%40%20%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95/

		fetch(url)
			.then(res => res.json())
			.then(data => {
				let item = data.find(i => i.name.includes(".md"));
				console.log('12')
				let images = data.find(i => i.name.includes("Images"));

				fetch(item.url)
					.then(res => res.json())
					.then(data => {
						let base64 = data.content
						let content = decodeURIComponent(escape(atob(base64)));
						let imgUrl = "https://raw.githubusercontent.com/BingFengHung/OpenDocuments/main/"

						if(images && images.path) {
							imgUrl += images.path;
						imgUrl = encodeURI(imgUrl);
						imgUrl = imgUrl.replace(/#/g, '%23');

						// let imgUrl = url.replace("https://api.github.com/repos", "https://raw.githubusercontent.com");
						// imgUrl = imgUrl.replace(".md?ref=main", "main" + "/")
						content = content.replaceAll('./Images', imgUrl);
						console.log(content)

						}

						// content = content.replace("![](./", "![](" + imgUrl)
						// content = content.replace('src="./', 'src="' + imgUrl)
						// content = content.replace(">](.", ">](" + imgUrl)
						try {
							setContent(marked(content))
						} catch (error) {

							setContent("")
						}

					})
			})
	}, []);

	return (
		<div>

			<div className={styles.container}
			dangerouslySetInnerHTML={{ __html: content }}>
		</div>
		</div>
	)
}

export default GitContent;