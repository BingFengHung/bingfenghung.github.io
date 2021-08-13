import './home.css'
import Footer from '../../components/Footer/Footer'
import TypeWriteBoard from '../../components/TypeWriteBoard/TypeWriteBoard'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import background from '../../assets/OGA1IP0.jpg'

function Home() {
	return (
		<div>
			<div className="container"> 
			<div> 
				<img src={background} alt="playground" /> 
				<TypeWriteBoard/> 
				</div> 
			</div>
			<ArticleCard/>
			<Footer/>
		</div>
	)
}

export default Home;