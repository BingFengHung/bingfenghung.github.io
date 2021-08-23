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

		fetch(url)
			.then(res => res.json())
			.then(data => {
							let base64 = data.content
							 let content = decodeURIComponent(escape(atob(base64)));
							 let imgUrl = url.replace("https://api.github.com/repos", "https://raw.githubusercontent.com");
							 imgUrl = imgUrl.replace("contents", "main" + "/")

							 content = content.replace("![](./", "![]("+ imgUrl)
							 content = content.replace('src="./', 'src="'+ imgUrl)
							 content = content.replace(">](.", ">](" + imgUrl)
							try {
								setContent(marked(content))
							} catch (error) {

								setContent("")
							}
						})
	}, []);

	return (
		<div className={styles.container}
			dangerouslySetInnerHTML={{ __html: content }}>
		</div>
	)
}

export default GitContent;