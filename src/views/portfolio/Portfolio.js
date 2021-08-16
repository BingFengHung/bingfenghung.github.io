import styles from './Portfolio.module.css'

function Portfolio() {

	return (
		<div className={styles.container}>
			<h3>專案項目</h3>
			<h4>ZDT</h4>
			<p>本專案主要以機台零停機為目標，顯示機台零件剩餘使用壽命，讓使用者在機台壽命機將抵達前，提早進行保養與維護，避免機台因為停機造成稼動率下降；主要提供機台預設零件壽命，使用者亦可自行添加所需檢查保養項目。</p>
        <h5>使用技術</h5>
        <ul>
            <li>Vue.js, BootstrapVue, Axios</li>
            <li>Node.js Express, MySQL, C#</li>
        </ul>
        <hr className={styles.hrStyle}/>

        <h4>JobManager</h4>
        <p>本專案主要危機台工單派送設定頁面，讓使用者可自行從網頁中進行工單派送、查詢歷史工單與建立相關加工材料資訊與加工程式使用，並且可根據過去派送過的工單進行資料的查詢與稼動率等計算。</p>

        <h5>使用到的技術</h5>
        <ul>
            <li>Vue.js, BootstrapVue, Axios </li>
            <li>Node.js Express, MySQL, C#</li>
        </ul>
        <hr className={styles.hrStyle}/>

        <h4>整場機台資訊</h4>
        <p>本專案主要蒐集工廠內所有連線機台的相關資訊，包含三色燈、異警訊息、工單資訊等相關資訊，統一呈現於單一頁面上，方便工廠老闆針對欲檢視的項目，進行完整的呈現，並且可點及所需要的頁面進行放大檢視</p>
        <h5>使用到的技術</h5>
        <ul>
            <li>Vue.js, BootstrapVue, Axios, jQuery</li>
            <li>Node.js Express, MySQL, C#</li>
        </ul>
        <hr className={styles.hrStyle}/>

        <h4>iFactory 檔案傳輸</h4>
        <p>本專案主要讓使用者可在辦公室中，將編輯完成的加工程式，透過此網頁進行檔案的傳送，無須再跑至機台端將加工程式上傳</p>
        <h5>使用到的技術</h5>
        <ul>
            <li>Vue.js</li>
            <li>Node.js Express, C#, Websocket</li>
        </ul>
        <hr className={styles.hrStyle}/>

        <h4>AI 斷刀檢知</h4>
        <p>本專案的目的在於加工中的刀具，在刀具快要斷裂前提前檢出，避免造成弓箭的無效加工以及工件的報廢，因此主要藉由判斷電流的趨勢，找出刀具斷裂的可能點提早檢測出。</p>
        <h5>使用到的技術</h5>
        <ul>
            <li>C Language Server, Python Client</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Linux, RaspberryPi</li>
        </ul>
        <hr className={styles.hrStyle}/>
		</div>
	)
}

export default Portfolio;