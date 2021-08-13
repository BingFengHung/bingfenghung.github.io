import './TypeWriteBoard.css'
import { useEffect, useRef} from 'react'

function TypeWriteBoard() {
	const essayCht = useRef(null);
	const essayEng = useRef(null);

	useEffect(() => { 
		let i = 0, j = 0; 
		let chit = "擁有夢想只是一種智力 實現夢想才是一種能力"
		let eng = "Having a dream is merely a state of mind.  Fulfilling your dream is an ability."

		let el_chit = essayCht.current 
		let el_eng = essayEng.current 

		function chit_loop() {
			if (i < chit.length) {
				el_chit.innerHTML += chit.charAt(i);
				i++;
			}

			if (j < eng.length) {
				el_eng.innerHTML += eng.charAt(j);
				j++;
			}

			if (i < chit.length) {
				setTimeout(chit_loop, 200);
			}
		}

		function eng_loop() {
			if (j < eng.length) {
				el_eng.innerHTML += eng.charAt(j);
				j++;
			}

			if (j < eng.length) {
				setTimeout(eng_loop, 75);
			}
		}

		chit_loop();
		eng_loop();
	});

	return (
			<div className="content">
					<h1>Welcome</h1>
					<p ref={essayCht}></p>
					<p ref={essayEng}></p>
				</div>
	)
}

export default TypeWriteBoard;