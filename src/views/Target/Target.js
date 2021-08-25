import style from './Target.module.css'
import { useEffect, useState } from "react";
import { marked } from '../../utils/markdown'
import Tabs from '../../components/Tabs/Tabs';
import TabList from '../../components/Tabs/TabList';
import Tab from '../../components/Tabs/Tab';
import Button	from '../../components/Tabs/Button';
import TabPanel from '../../components/Tabs/TabPanel';

function Target() {
	const [content, setContent] = useState("");
	const url = "https://api.github.com/repos/BingFengHung/personal_target";

	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => {
				let readmeUrl = url + '/contents'
				fetch(readmeUrl)
				.then(res => res.json())
				.then(data => {
						let readMeUrl = data.find(element => element.name === "README.md");

				if (readMeUrl) {
					let branch = readMeUrl.url;
					branch = branch.substring(branch.indexOf("ref=")).replace("ref=", "");

					fetch(readMeUrl.url)
						.then(res => res.json()) 
						.then(data => { 
							let base64 = data.content;
							let content = decodeURIComponent(escape(atob(base64))); 
							let imgUrl = url.replace("https://api.github.com/repos", "https://raw.githubusercontent.com"); 
							imgUrl = imgUrl.replace("contents", branch + "/") 
							
							content = content.replace("![](./", "![](" + imgUrl) 
							content = content.replace('src="./', 'src="' + imgUrl) 
							content = content.replace(">](.", ">](" + imgUrl) 
							
							try { 
								setContent(marked(content)) 
							} catch (error) { 
								setContent("") 
							} 
						}) 
					} 
				})
				})
			}, []); 
			
			return ( 
				<Tabs selected={1}>
					<TabList>
						<Tab>
							<Button>Foo</Button>
						</Tab>
						<Tab>
							<Button>Bar</Button>
						</Tab>
						<Tab>
							<Button>Baz</Button>
						</Tab>
					</TabList>

					<TabPanel> 
						<div> 
							<div className={style.container} dangerouslySetInnerHTML={{__html:content}}></div> 
							</div>
						</TabPanel>
					<TabPanel>Related to bar</TabPanel>
					<TabPanel>Related to baz</TabPanel>

				</Tabs>
			) 
		}

export default Target;