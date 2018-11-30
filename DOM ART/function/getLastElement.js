//检测、获取引用中最后一个元素
function getLastElement(parentNode) {
	if(parentNode.lastChild.nodeType === 1) {
		return parentNode.lastChild;
	}
	var elements = parentNode.getElementsByTagName("*");
	return elements[elements.length-1];
}