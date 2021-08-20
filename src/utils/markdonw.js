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

export { marked };