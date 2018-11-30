function stripeTables() {
	if(!document.getElementsByTagName) return false;
	var tables = document.getElementsByTagName("table");
	for(let i=0; i<tables.length; i++) {
		let current_table = tables[i];
		let rows = current_table.getElementsByTagName("tr");
		let odd = false;
		for(let j=0; j<rows.length; j++) {
			if(odd) {
				addClass(rows[j], "odd");
				// rows[j].style.backgroundColor = "#ffc";
				odd = !odd;
			}else {
				odd = !odd
			}
		}
	}
}
function highlightRows() {
	if(!document.getElementsByTagName) return false;
	let rows = document.getElementsByTagName("tr");
	for(let i=0; i<rows.length; i++) {
		let current_row = rows[i];
		current_row.onmouseover = function() {
			this.style.fontWeight = "bold";
		};
		current_row.onmouseout = function() {
			this.style.fontWeight = "normal";
		};
	}
}
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);