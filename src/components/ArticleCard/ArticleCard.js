import style from './ArticleCard.module.css';
import { useEffect, useState } from 'react';
import Card from '../Card/Card';

function ArticleCard() {
	const [articleData, setArticleData] = useState([])
	useEffect(() => {
		fetch('./Articles.json', {
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			}
		})
			.then(res => res.json())
			.then(data => {
				let dataList = []

				let counts = Object.keys(data).map(key => {
					return {
						[key]: data[key].length
					}
				});

				for (let i of Object.keys(data)) {
					dataList.push(<Card title={data[i][0].title} description={data[i][0].description} img={data[i][0].img} link={data[i][0].link} />);
				}

				let maxItem = [...counts].reduce((max, item) => {
					let key = Object.keys(item)[0];
					return item[key] > max ? key : max;
				}, "")

				let items = data[maxItem][1]
				dataList.push(<Card title={items.title} description={items.description} img={`../${items.img}`} link={items.link} />);
				setArticleData(dataList)
			})
	}, [])

	return (
		<div className={style.article}>
			<h2>近期文章</h2>
			<div className={style.article_block}>
				{
					articleData
				}
			</div>
		</div>


	)
}

export default ArticleCard;
