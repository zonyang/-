function moveElement(elementID, final_x, final_y, internal) {
	var ele = document.getElementById(elementID);
	if(!ele.style.top) {
		ele.style.top = "0px";
	}
	if(!ele.style.left ) {
		ele.style.left = "0px";
	}
	var xpos = parseInt(ele.style.top);
	var ypos = parseInt(ele.style.left);
	if(ele.movement) {
		clearTimeout(ele.movement);
	}
	if(xpos ===  final_x&& ypos === final_y) {
		return true;
	}
	if(xpos >  final_x) {
		xpos -= Math.ceil((xpos - final_x)/10);
	}else if(xpos < final_x) {
		xpos +=  Math.ceil((final_x - xpos)/10);
	}
	if(ypos > final_y) {
		ypos -= Math.ceil((ypos - final_y)/10);
	}else if(ypos < final_y) {
		ypos += Math.ceil((final_y - ypos)/10);
	}
	ele.style.top = xpos + "px";
	ele.style.left = ypos + "px";
	var repeat = "moveElement('"+elementID+"', "+final_x+", "+final_y+", "+internal+")";
	ele.movement = setTimeout(repeat, internal);
	// console.log(xpos);
	// ele.style.left = "200px";
}
// addLoadEvent(moveElement);
