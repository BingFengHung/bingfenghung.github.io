import styles from './Faq.module.css';
import {useState, useEffect, useRef} from 'react';
import Card from '../../components/Card/Card';

function Faq() {
	const [cshartArticleData, setCSharpArticleData] = useState([])
	const [javascriptArticleData, setJavaScriptArticleData] = useState([])
	const [pythonArticleData, setPythonArticleData] = useState([])
	const [linuxArticleData, setLinuxArticleData] = useState([])
	const [othersArticleData, setOthersArticleData] = useState([])

	const csharp = useRef(null);
	const javascript = useRef(null);
	const python = useRef(null);
	const linux = useRef(null);
	const others = useRef(null);

	const csharp_tab_content = useRef(null);
	const javascript_tab_content = useRef(null);
	const python_tab_content = useRef(null);
	const linux_tab_content = useRef(null);
	const others_tab_content = useRef(null);

	const csharp_content = useRef(null);
	const javascript_content = useRef(null);
	const python_content = useRef(null);
	const linux_content = useRef(null);
	const others_content = useRef(null);

	function openTab(title, content, color) {
		console.log('ins')
		if (title === null || title.current === null) return;
		let tab = [csharp, javascript, python, linux, others];
		let tabContent = [csharp_tab_content, javascript_tab_content, python_tab_content, linux_tab_content, others_tab_content]
		let articleContent = [csharp_content, javascript_content, python_content, linux_content, others_content]

		tab.forEach(element => {
			element.current.style.backgroundColor = ''
		});

		tabContent.forEach(element => {
			element.current.style.display = 'none'
		})

		articleContent.forEach(element => {
			element.current.style.display='none'
		})

		title.current.style.backgroundColor = color;
		title.current.style.display = 'block';

		let idx = tab.indexOf(title)
		tabContent[idx].current.style.display='block';
		tabContent[idx].current.style.backgroundColor = color
		title.current.style.backgroundColor = color

		articleContent[idx].current.style.display = 'flex';
	}

	useEffect(() => {
		fetch('./Articles.json', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
		.then(res => res.json())
		.then(data => {
			let csharpDoc = data.CSharp;
			let javascriptDoc = data.JavaScript;
			let pythonDoc = data.Python;
			let linuxDoc = data.Linux;
			let othersDoc = data.Others;

			let dataList = []
			csharpDoc.forEach((element, idx) => {
				dataList.push(<Card key={idx} title={element.title} description={element.description} img={element.img} link={element.link} />);
			});
			setCSharpArticleData(dataList);

			dataList = []
			javascriptDoc.forEach((element, idx) => {
				dataList.push(<Card key={idx} title={element.title} description={element.description} img={element.img} link={element.link} />);
			});
			setJavaScriptArticleData(dataList);

			dataList = []
			pythonDoc.forEach((element, idx) => {
				dataList.push(<Card key={idx} title={element.title} description={element.description} img={element.img} link={element.link} />);
			});
			setPythonArticleData(dataList);

			dataList = []
			linuxDoc.forEach((element, idx) => {
				dataList.push(<Card key={idx} title={element.title} description={element.description} img={element.img} link={element.link} />);
			});
			setLinuxArticleData(dataList);

			dataList = []
			othersDoc.forEach((element, idx) => {
				dataList.push(<Card key={idx} title={element.title} description={element.description} img={element.img} link={element.link} />);
			});
			setOthersArticleData(dataList);

			openTab(csharp, csharp_content,'red')
		})
	}, []);

	return (
		<div className={styles.container}>
			<div ref={csharp_tab_content} className={styles.tab_content}>
				<h1>C#</h1>
				<p>C# / .NET 經驗談</p>
			</div>

			<div ref={javascript_tab_content} className={styles.tab_content}>
				<h1>JavaScript</h1>
				<p>前端、後端一把罩</p>
			</div>

			<div ref={python_tab_content} className={styles.tab_content}>
				<h1>Python</h1>
				<p>當代 AI 熱門語言首選</p>
			</div>
			
			<div ref={linux_tab_content} className={styles.tab_content}>
				<h1>Linux</h1>
				<p>無所不在的 OS 系統</p>
			</div>

			<div ref={others_tab_content} className={styles.tab_content}>
				<h1>Others</h1>
				<p>其他雜談</p>
			</div>

			<button ref={csharp} className={styles.tab_link} onClick={() => openTab(csharp, csharp_content, 'red')}>CSharp</button> 
			<button ref={javascript} className={styles.tab_link} onClick={() => openTab(javascript, javascript_content, 'green')}>JavaScript</button> 
			<button ref={python} className={styles.tab_link} onClick={() => openTab(python, python_content, 'blue')}>Python</button> 
			<button ref={linux} className={styles.tab_link} onClick={()=>openTab(linux, linux_content, 'orange')}>Linux</button> 
			<button ref={others} className={styles.tab_link} onClick={() => openTab(others, others_content, 'yellowgreen')}>其他</button> 
			
			{/* Content */}
			<div ref={csharp_content} className={styles.content}>
				{cshartArticleData}
			</div>
			<div ref={javascript_content} className={styles.content}>
				{javascriptArticleData}
			</div>
			<div ref={python_content} className={styles.content}>
				{pythonArticleData}
			</div>
			<div ref={linux_content} className={styles.content}>
				{linuxArticleData}
			</div>
			<div ref={others_content} className={styles.content}>
				{othersArticleData}
			</div>
		</div>
	)
}

export default Faq;