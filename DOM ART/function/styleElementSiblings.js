//获取元素兄弟节点
function styleElementSiblings(tag, theclass) {
	if(!document.getElementsByTagName) return false;
	var heads = document.getElementsByTagName(tag);
	for(let i=0; i<heads.length; i++) {
		let current_heads = heads[i];
		let head_sibling = getNextElement(current_heads.nextSibling);
		addClass(head_sibling, theclass);
		// head_sibling.style.fontWeight = "bold";
		// head_sibling.style.fontSize = "1.2em";
	}
}
//获取下一个元素节点
function getNextElement(node) {
	if (node.nodeType === 1) {
		return node;
	}
	if(node.nextSibling){
		return getNextElement(node.nextSibling);
	}
	return null;
}
addLoadEvent(function() {
	styleElementSiblings("h1", "intro");
});