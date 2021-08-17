import styles from './Articles.module.css'
import { useEffect, useState } from 'react';
import marked from 'marked';
import hljs  from 'highlight.js'
import 'highlight.js/styles/github.css';

marked.setOptions({
  renderer: new marked.Renderer(), 
	highlight: function(code) {
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

function Articles(props) {
	// const mdPath = './' + props.links
	const [markdown, setMarkdown] = useState(null);

	useEffect(() => {
		const links = localStorage.getItem("links")

		fetch(links)
		.then(response => {
			return response.text()
		})
		.then(text => {
			setMarkdown(marked(text))
		})
	}, [])

	return (
		<div className={styles.container} 
		dangerouslySetInnerHTML={{__html: markdown}}>

		</div>
	)
}

export default Articles;