// find array item from last
function findLast(array, predicate) {
	for (let i = array.length - 1; i >= 0; --i) {
		const x = array[i];

		if (predicate(x)) {
			return [x, i];
		}
	}

	return [undefined, -1];
}

// Find previous node
// current: currnet node
// key: previous node key word
function findPrevious(contentList, current, key) {
	let idx = contentList.indexOf(current);
	let previousArray = contentList.slice(0, idx);
	return findLast(previousArray, item => item.startsWith(key));
}

// Convert markdown to tree view structure
function convertToTree(markdownContent) {
	let contentList = markdownContent.split('\n')
	let tree = {};

	contentList.forEach(el => {
		if (el.startsWith('# ')) {
			tree[el] = {}
		} else if (el.startsWith('## ')) {
			let [lastElement] = findPrevious(contentList, el, '# ');
			tree[lastElement][el] = {}
		} else if (el.startsWith('### ')) {
			let [lastElement2] = findPrevious(contentList, el, '## ');
			let [lastElement] = findPrevious(contentList, lastElement2, '# ');

			tree[lastElement][lastElement2][el] = {}
		} else if (el.startsWith('-')) {
			let [lastElement3, idx3] = findPrevious(contentList, el, '### ');
			let [lastElement2, idx2] = findPrevious(contentList, el, '## ');
			let [lastElement, idx] = findPrevious(contentList, el, '# ');

			if(idx2 > idx3) {
				if (!tree[lastElement][lastElement2]['_']) {
					tree[lastElement][lastElement2]['_'] = []
				}

				tree[lastElement][lastElement2]['_'].push(el);
			} else if (idx > idx2) {
				if (!tree[lastElement]['_']) {
					tree[lastElement]['_'] = []
				}

				tree[lastElement]['_'].push(el);
			} else { 
				if(!tree[lastElement][lastElement2][lastElement3]['_']) { 
					tree[lastElement][lastElement2][lastElement3]['_'] = [] 
				}
				
				tree[lastElement][lastElement2][lastElement3]['_'].push(el);
			}
		}
	})

	return tree;
}

export default convertToTree;