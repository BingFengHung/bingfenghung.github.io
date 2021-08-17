import { useEffect } from "react";

var useScriptObject = {
	useScript: url => { 
		useEffect(() => { 
			const script = document.createElement('script') 
			
			script.src = url; 
			script.async = true; 
			document.body.appendChild(script) 
			
			script.onload = () => {
				this.onLoad() 
			}
			
			return () => { 
				document.body.remove(script); 
			} 
		}, [url]); 
	},
	onLoad: () => { }
}

// const useScript = url => {
// 	useEffect(() => {
// 		const script = document.createElement('script')

// 		script.src = url;
// 		script.defer = true;
// 		document.body.appendChild(script)

// 		script.onload = () => {

// 		}

// 		return () => {
// 			document.body.remove(script);
// 		}
// 	}, [url]);
// }

export default useScriptObject;