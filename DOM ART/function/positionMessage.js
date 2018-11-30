function positionMessage() {
	var wrapper = document.getElementById("wrapper");
	wrapper.style.position = "relative";
	var ele = document.getElementById("message1");
	ele.style.position = "absolute";
	ele.style.top = "50px";
	ele.style.left = "50px";
	moveElement("message1", 150, 200, 50);
	ele = document.getElementById("message2");
	ele.style.position = "absolute";
	ele.style.top = "250px";
	ele.style.left = "50px";
	moveElement("message2", 150, 200, 50);
}
addLoadEvent(positionMessage);