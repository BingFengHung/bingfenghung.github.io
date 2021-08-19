import styles from './home.module.css'
import Footer from '../../components/Footer/Footer'
import TypeWriteBoard from '../../components/TypeWriteBoard/TypeWriteBoard'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import background from '../../assets/OGA1IP0.jpg'

function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.container}> 
			<div> 
				<img className={styles.backgroundImage} src={background} alt="playground" /> 
				<TypeWriteBoard/> 
				</div> 
			</div>
			<ArticleCard/>
			<Footer/>
		</div>
	)
}

export default Home;