import style from './Introduce.module.css'
import Skills from '../Skills/Skills'

function Introduce() {
	return (
		<div className={style.info}>
			<h3>關於我</h3>
			<p>我本身是射手座，對於有興趣的事物會一頭熱的栽進去，探究其中的原因；因為這個特質，讓我在接觸到程式時，發現程式語言的奧妙與有趣的地方，也因為學習程式語言讓我在邏輯處理方面的思維有很大的躍進，對於處裡各方面的事務更有條理。</p>

			<h3>工作經歷</h3>
			<p>
				碩士畢業後的第一份工作，是在協鴻工業股份有限公司擔任軟體工程師，主要負責 MES 功能開發、機台加值軟體開發以及 iFactory 機台資訊整合網頁。 從中學習到了與美編人員的溝通，跨單位的合作整合以及專案管制的進度控制，例如 MES，需要經常與資管組以及加工課的人員經常開會，並針對加工課的需求進行開發與設計，並與資管組共同討論資料的串接問題，例如兩個不同的資料庫之間要如何溝通與儲存等問題，也因為有這個經驗，在後續的跨單位合作往往都能很順利的合作。 在公司的這段期間，除了完成公司上面的事物之外，也會在下班閒暇之餘不斷的精進自己的實力，也因此得到公司外訓的機會，有機會接觸到人工智慧的領域，並且也於外訓上課的時候，發表了
				AI 斷刀檢知的功能，有幸也得到了第二名的佳績，這當然不是我一個人的功勞，是專案成員的共同努力，當然在過程中會有不少的溝通與討論，但在公司專案管理的經驗支援之下，讓專案不只可以如期的完成，也得到該單位的肯定，榮獲第二名的殊榮。
			</p>
			<h4>iFactory 網站開發</h4>
			<h5>前端</h5>
			<ul>
				<li>專案進度管制頁面開發</li>
				<li>ZDT 零件壽命列表頁面</li>
				<li>JobManager 工單管制系統</li>
				<li>iFactory 機台稼動率顯示頁面開發</li>
			</ul>

			<h5>後端</h5>
			<ul>
				<li>機台加工程式傳輸功能</li>
				<li>機台稼動率彙整計算</li>
				<li>工單資訊與 ZDT 機台相關資訊</li>
			</ul>

			<h3>技能</h3>
			<div className={style.skill_container}>
				<div className={style.skills}>
					<h4>Frontend</h4>
					<ul>
						<li><Skills skillName="HTML/CSS/JS ES6" rate="4" /></li>
						<li><Skills skillName="Vue.js/Vue Cli 3" rate="3" /></li>
						<li><Skills skillName="BootstrapVue" rate="4" /></li>
						<li><Skills skillName="Axios" rate="4" /></li>
						<li><Skills skillName="jQuery" rate="3" /></li>
						<li><Skills skillName="Webpcack" rate="3" /></li>
					</ul>
				</div>

				<div className={style.skills}>
					<h4>Backend</h4>
					<ul>
						<li> <Skills skillName="Node.js Express" rate="4"></Skills> </li>
						<li> <Skills skillName="WebSocket 串接 C# Server" rate="4"></Skills> </li>
					</ul>
				</div>

				<div className={style.skills}>
					<h4>SQL</h4>
					<ul>
						<li> <Skills skillName="MySQL" rate="5"></Skills> </li>
						<li> <Skills skillName="PostgreSQL" rate="3"></Skills> </li>
						<li> <Skills skillName="MongoDB" rate="4"></Skills> </li>
					</ul>
				</div>

				<div className={style.skills}>
					<h4>Desktop App</h4>
					<ul>
						<li> <Skills skillName="C# WPF" rate="5"></Skills> </li>
						<li> <Skills skillName="Caliburn.Micro" rate="5"></Skills> </li>
						<li> <Skills skillName="AutoFac" rate="4"></Skills> </li>
						<li> <Skills skillName="Unit Test (NUnit/NSubstitute)" rate="4"></Skills> </li>
					</ul>
				</div>

				<div className={style.skills}>
					<h4>Artificial Intelligence</h4>
					<ul>
						<li> <Skills skillName="機器學習" rate="4"></Skills> </li>
						<li> <Skills skillName="深度學習" rate="3"></Skills> </li>
					</ul>
				</div>

				<div className={style.skills}>
					<h4>其他</h4>
					<ul>
						<li> <Skills skillName="Linux" rate="3"></Skills> </li>
						<li> <Skills skillName="Git" rate="4"></Skills> </li>
						<li> <Skills skillName="WebSocket" rate="3"></Skills> </li>
						<li> <Skills skillName="MQTT" rate="2"></Skills> </li>
						<li> <Skills skillName="Vim" rate="3"></Skills> </li>
					</ul>
				</div>

			</div>
		</div>
	)
}

export default Introduce