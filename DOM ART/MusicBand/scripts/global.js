//添加事件到window.onload(页面加载完毕)
function addLoadEvent(func) {
	var oldOnload = window.onload;
	if(typeof window.onload !== "function") {
		window.onload = func;
	}else {
		window.onload = function() {
			oldOnload();
			func();
		};
	}
}
//添加类
function addClass(element, value) {
	if(!element.className) {
		element.className = value;
	}else {
		element.className = element.className + " " + value;
	}
}
//向元素后面插入元素
function insertAfter(newElement, targetElement) {
	var parentNode = targetElement.parentNode;
	if(parentNode.lastChild === targetElement) {
		parentNode.appendChild(newElement);
	}else {
		parentNode.insertBefore(newElement, targetElement.nextSibling);
	}
}
//移动元素
function moveElement(elementID, final_x, final_y, interval) {
	if(!document.getElementById) return false;
	var elem = document.getElementById(elementID);
	if(elem.movement) {
		clearTimeout(elem.movement);
	}
	if(!elem.style.top) {
		elem.style.top = "0px";
	}
	if(!elem.style.left) {
		elem.style.left = "0px";
	}
	var dist;
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos === final_x && ypos === final_y) return true;
	if(xpos < final_x) {
		dist = Math.ceil((final_x - xpos)/10);
		xpos += dist;
	}
	if(xpos > final_x) {
		dist = Math.ceil((xpos - final_x)/10);
		xpos -= dist;
	}
	if(ypos < final_y) {
		dist = Math.ceil((final_y - ypos)/10);
		ypos += dist;
	}
	if(ypos > final_y) {
		dist = Math.ceil((ypos - final_y)/10);
		ypos -= dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('" + elementID + "'," + final_x + "," + final_y + "," + interval + ")";
	elem.movement = setTimeout(repeat, interval);
}
//表格行隔行样式,鼠标悬停行亮样式 
function stripeTables() {
	if(!document.getElementsByTagName("table")) return false;
	var tables = document.getElementsByTagName("table");
	for(let i=0; i<tables.length; i++) {
		var odd = false;
		let current_table = tables[i];
		var rows = current_table.getElementsByTagName("tr");
		for(let j=0; j<rows.length; j++) {
			let current_row = rows[j];
			current_row.oldClassName = current_row.className;
			current_row.onmouseover = function() {
				addClass(this, "highlight");
			};
			current_row.onmouseout = function() {
				this.className = current_row.oldClassName;
			};
			if(odd) {
				addClass(current_row, "odd");
				odd = !odd;
			}else {
				odd = !odd;
			}
		}	
	}
}
addLoadEvent(stripeTables);
//提取缩写值
function displayAbbreviations() {
	if(!document.getElementsByTagName("abbr")) return false;
	var abbreviations = document.getElementsByTagName("abbr");
	var defs = [];
	for(let i=0; i<abbreviations.length; i++) {
		let current_abbr = abbreviations[i];
		if( current_abbr.childNodes.length < 1) continue;
		let key = current_abbr.lastChild.nodeValue;
        defs[key] = current_abbr.getAttribute("title");
	}
	var dlist = document.createElement("dl");
	for(key in defs) {
		let dt = document.createElement("dt");
		let dhead = document.createTextNode(key);
		dt.appendChild(dhead); 
		let dd = document.createElement("dd");
		let dtext = document.createTextNode(defs[key]); 
		dd.appendChild(dtext);
		dlist.appendChild(dt);
		dlist.appendChild(dd);
	}
	if(dlist.childNodes.length < 1) return false;
	var header = document.createElement("h3");
	var h_text = document.createTextNode("Abbreviations");
	header.appendChild(h_text);
	var article = document.getElementsByTagName("article")[0];
	article.appendChild(header);
	article.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);
//为表单lable绑定点击焦点事件
function focusLables() {
	if(!document.getElementsByTagName("lable")) return false;
	var lables = document.getElementsByTagName("lable");
	for(let i=0; i<lables.length; i++) {
		let current_lable = lables[i];
		if(!current_lable.getAttribute("for")) continue;
		current_lable.onclick = function() {
			let id = current_lable.getAttribute("for");
			if(!document.getElementById(id)) return false;
			let ele = document.getElementById(id);
			ele.focus();
		}
	}
}
addLoadEvent(focusLables);
//向当前访问链接页面添加类
function highlightPage() {
	var headers = document.getElementsByTagName("header");
	if(headers.length === 0) return false;
	var navs = headers[0].getElementsByTagName("nav");
	if(navs.length === 0) return false;
	var links = navs[0].getElementsByTagName("a");
	for(let i=0; i<links.length; i++) {
		let linkUrl = links[i].getAttribute("href");
		let currentUrl = window.location.href;
		if(currentUrl.indexOf(linkUrl) !== -1) {
			addClass(links[i], "here");
			let id = links[i].lastChild.nodeValue.toLowerCase();
			document.body.setAttribute("id", id);
		}
	}
	// moveElement("live", 100, 100, 10);
}
addLoadEvent(highlightPage);
//制作幻灯片 每个链接滑动到相应图片 
function prepareSlideshow() {
	if(!document.createElement) return false;
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("intro")) return false;
	var slideshow = document.createElement("div");
	slideshow.setAttribute("id", "slideshow");
	var preview = document.createElement("img");
	preview.setAttribute("src", "images/foods.jpg");
	preview.setAttribute("alt", "foods");
	preview.setAttribute("id", "preview");
	slideshow.appendChild(preview);
	var intro = document.getElementById("intro");
	insertAfter(slideshow, intro);
	var links = document.getElementsByTagName("a");
	for(let i=0; i<links.length; i++) {
		let link = links[i];
		link.onmouseover = function() {
			let destination = this.getAttribute("href");
			if(destination.indexOf("index") !== -1) {
				moveElement("preview", 0, 0, 10);
			}else if(destination.indexOf("about") !== -1) {
				moveElement("preview", 0, 0, 10);
			}else if(destination.indexOf("photos") !== -1) {
				moveElement("preview", 0, -634, 10);
			}else if(destination.indexOf("live") !== -1) {
				moveElement("preview", 0, -634*2, 10);
			}else if(destination.indexOf("contact") !== -1) {
				moveElement("preview", 0, -634*3, 10);
			}
		}
	}
}
addLoadEvent(prepareSlideshow);
//根据ID显示相应section 
function showSection(id) {
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("section")) return false;
	var sections = document.getElementsByTagName("section");
	for(let i=0; i<sections.length; i++) {
		let current_section = sections[i];
		if(current_section.getAttribute("id") === id) {
			current_section.style.display = "block";
		} else {
			current_section.style.display = "none";
		}
	}
}
//为内部链接对应显示相关内容
function prepareInternalNav() {
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName("article")) return false;
	var articles = document.getElementsByTagName("article");
	if(articles.length === 0) return false;
	var navs = articles[0].getElementsByTagName("nav");
	if(navs.length === 0) return false;
	var links = navs[0].getElementsByTagName("a");
	for(let i=0 ; i<links.length; i++) {
		let current_link = links[i];
		let linkId = current_link.getAttribute("href").split("#")[1];
		document.getElementById(linkId).style.display= "none";
		current_link.destination = linkId;
		current_link.onclick = function() {
			showSection(this.destination);
			return false;
		}
	}
}
addLoadEvent(prepareInternalNav);
//将链接指向图片显示在占位图上 
function showPic(whichPic) {
	if(!document.getElementById) return true;
	var src = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", src);
	if(whichPic.getAttribute("title")) {
		var text = whichPic.getAttribute("title");
	}else {
		text= "";
	}
	var description = document.getElementById("description");
	if(description.lastChild.nodeType === 3) {
		description.lastChild.nodeValue = text;		
	}
	return false;
}
//准备占位图片以及描述 
function prepareplaceholder() {
	if(!document.getElementById) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var placeholder = document.createElement("img");
	placeholder.setAttribute("src", "images/1.jpg");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("alt", "my image gallery");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var desc_text = document.createTextNode("Choose an iamge");
	description.appendChild(desc_text);
	insertAfter(description, gallery);
	insertAfter(placeholder, description);
}
addLoadEvent(prepareplaceholder);
//为每个链接添加点击事件 显示大图
function preparepgallery() {
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(let i=0 ;i<links.length; i++) {
		let current_link = links[i];
		current_link.onclick = function() {
			return showPic(this);
		}
	}
}
addLoadEvent(preparepgallery);
//为表单placeholder提供焦点事件
function resetFields(whichForm) {
	if(!Modernizr.input.placeholder) return false;
	for(let i=0; i<whichForm.elements.length; i++) {
		let element = whichForm.elements[i];
		if(element.type === "submit") continue;
		if(!(element.getAttribute("placeholder") || element.placeholder)) continue;
		element.onfocus = function() {
			let text = this.getAttribute("placeholder") || element.placeholder;
			if(this.value === text) {
				this.value = "";
				this.className = "";
			}
		};
		element.onblur = function() {
			let text = this.getAttribute("placeholder") || element.placeholder;
			if(this.value === "") {
				this.value = text;
				this.className = "placeholder";
			}
		};
		element.onblur();
	}
}
function isFiled(filed) {
	if(filed.value.replace(" ","").length === 0) return false;
	return ((filed.value !== (filed.getAttribute("placeholder") || filed.placeholder)));
}
function isEmail(filed) {
	return (filed.value.indexOf("@") !== -1 && filed.value.indexOf(".") !== -1);
}
function validateForm(whichForm) {
	for(let i=0; i<whichForm.elements.length; i++) {
		let element = whichForm.elements[i];
		if(element.required) {
			if(!isFiled(element)) {
				alert("please fill in the " + element.name);
				return false;
			}
		}
		if(element.type === "email") {
			if(!isEmail(element)) {
				alert("the " + element.name + " filed must be a valid email address");
				return false;
			}
		 }
	}
	return true;
}


// //ajax
// function getHTTPObject() {
// 	if (window.XMLHttpRequest){// code for all new browsers
// 		 xmlhttp=new XMLHttpRequest();
// 	 }
// 	else if (window.ActiveXObject){// code for IE5 and IE6
// 	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
// 	 }
// 	 return xmlhttp;
// } 
// function submitFormWithAjax(whichForm, thetarget) {
// 	var request = getHTTPObject();
// 	 console.log(whichForm.getAttribute("action"));
// 	request.open('POST',whichForm.getAttribute("action"),true);
// 	request.setRequestHeader("content-type","application/x-www-form-urlencoded");
// 	request.onreadystatechange = function() {
// 		console.log(request.readyState);
// 		if(request.readyState === 4) {
// 			console.log(request.status);
// 		}
// 	};
// 	request.send();
// 	return false;
// }

function prepareForms() {
	for(let i=0; i<document.forms.length; i++) {
		let this_form = document.forms[i];
		resetFields(this_form);
		this_form.onsubmit = function() {
			return validateForm(this)
			//if(!validateForm(this)) return false; 	
			// let article = document.getElementsByTagName("article")[0];
			// submitFormWithAjax(this,article);
			// return false;		
		};
	}
}
addLoadEvent(prepareForms);