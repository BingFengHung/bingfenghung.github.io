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

		fetch(url)
			.then(res => res.json())
			.then(data => {
				let item = data.find(i => i.name.includes(".md"));
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

						content = content.replaceAll('./Images', imgUrl);
						}

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