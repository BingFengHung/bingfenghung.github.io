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

	const csharp_content = useRef(null);
	const javascript_content = useRef(null);
	const python_content = useRef(null);
	const linux_content = useRef(null);
	const others_content = useRef(null);

	function openTab(element, color) {
		if(element === null || element.current === null) {
			// console.log(element.current)
			return
		}
		console.log(element)

		let tab = [csharp, javascript, python, linux, others];
		let articleContent = [csharp_content, javascript_content, python_content, linux_content, others_content]

		console.log(csharp.current)
		tab.forEach(element => {
			element.current.style.display='none'
		});

		articleContent.forEach(element => {
			element.current.style.display='none'
		})

		element.current.style.backgroundColor = color;
		element.current.style.display = 'block';

		let idx = tab.indexOf(element)
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
			let csharp = data.CSharp;
			let javascript = data.JavaScript;
			let python = data.Python;
			let linux = data.Linux;
			let others = data.Others;

			let dataList = []
			csharp.forEach((element, idx) => {
				dataList.push(<Card key={idx} title={element.title} description={element.description} img={element.img} link={element.link} />);
			});
			setCSharpArticleData(dataList);

			dataList = []
			javascript.forEach((element, idx) => {
				dataList.push(<Card key={idx} title={element.title} description={element.description} img={element.img} link={element.link} />);
			});
			setJavaScriptArticleData(dataList);

			dataList = []
			python.forEach((element, idx) => {
				dataList.push(<Card key={idx} title={element.title} description={element.description} img={element.img} link={element.link} />);
			});
			setPythonArticleData(dataList);

			dataList = []
			linux.forEach((element, idx) => {
				dataList.push(<Card key={idx} title={element.title} description={element.description} img={element.img} link={element.link} />);
			});
			setLinuxArticleData(dataList);

			dataList = []
			others.forEach((element, idx) => {
				dataList.push(<Card key={idx} title={element.title} description={element.description} img={element.img} link={element.link} />);
			});
			setOthersArticleData(dataList);
		})
	}, []);

	return (
		<div>
			<div className={styles.tab_content}>
				<h1>C#</h1>
				<p>C# / .NET 經驗談</p>
			</div>

			<div className={styles.tab_content}>
				<h1>JavaScript</h1>
				<p>前端、後端一把罩</p>
			</div>

			<div className={styles.tab_content}>
				<h1>Python</h1>
				<p>當代 AI 熱門語言首選</p>
			</div>
			
			<div className={styles.tab_content}>
				<h1>Linux</h1>
				<p>無所不在的 OS 系統</p>
			</div>

			<div className={styles.tab_content}>
				<h1>Others</h1>
				<p>其他雜談</p>
			</div>

			<button ref={csharp} onClick={openTab(csharp, 'red')}>CSharp</button> 

			<button ref={javascript} onClick={openTab(javascript, 'green')}>JavaScript</button> 

			<button ref={python} onClick={openTab(python, 'blue')}>Python</button> 

			<button ref={linux} onClick={openTab(linux, 'orange')}>Linux</button> 

			<button ref={others} onClick={openTab(others, 'yellowgreen')}>其他</button> 
			
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