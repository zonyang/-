function prepareSlideshow() {
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	//创建图片及包裹层
	var wrapper = document.createElement("div");
	wrapper.setAttribute("id","slideshow");
	var img = document.createElement("img");
	img.setAttribute("src","foods.jpg");
	img.setAttribute("id","preview");
	img.setAttribute("alt","building blocks of web design");
	wrapper.appendChild(img);

	//绑定鼠标事件
	var olist = document.getElementById("linklist");
	insertAfter(wrapper, olist);
	var links = olist.getElementsByTagName("a");
	for(let i=0; i<links.length; i++) {
		let current_link = links[i];
		current_link.onmouseover = function() {
			moveElement("preview", -738*(i+1), 0, 50);
		}
	}
}
addLoadEvent(prepareSlideshow);