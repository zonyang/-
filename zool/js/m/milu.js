// JavaScript Document
$(function(){
    $("#contentfirst").html("<b>麋鹿,又名“四不像”,是世界珍稀动物，属于鹿科。生活于温暖潮湿泽地，喜平原、沼泽和水域。<b>")
        .hide(100).show(100).animate({width:"+=20%"},1000);
    $("#contentsecond").html("<b>麋鹿是一种大型食草动物，性格温顺，善游泳。雄性的麋鹿角倒置时能够三足鼎立，是在鹿科动物中独一无二的。<b>")
        .hide(100).delay(1000).show(100).animate({width:"+=20%"},1000);
    $("#contentthird").html("<b>该种动物原产于中国长江中下游沼泽地带，后来由于自然气候变化和人类的猎杀，数量开始大量减少。<b>")
        .hide(100).delay(1000).show(100).animate({width:"+=20%"},1000);
    $("#contentforth").html("<b>现如今，野生的麋鹿已经灭绝，后来通过放养，中国重新建立了麋鹿的自然种群<b>")
        .hide(100).delay(2000).show(100).animate({width:"+=20%"},1000);
   
});
function mouseOverHandler(evt) {
		var thumb = document.getElementById("thumb");
		var clearimg = document.getElementById("clearimg");
		var thumbWidth = thumb.clientWidth;
		var thumbHeight = thumb.clientHeight;
		//var abc = getStyle(thumb, "width");
		thumb.style.left = (evt.clientX - thumbWidth / 2) + "px";
		thumb.style.top = (evt.clientY - thumbHeight / 2) + "px";
		thumb.style.positionX = thumb.style.left;
		thumb.style.positionY = thumb.style.top;

		//thumb.style.clip = buildClip(evt.clientX ? evt.clientX : evt.x,
		//		evt.clientY ? evt.clientY : evt.y, thumbWidth, thumbHeight);
	}
	function getStyle(elem, name) {
		//如果该属性存在于style[]中，则它最近被设置过(且就是当前的) 
		if (elem.style[name]) {
			return elem.style[name];
		}
		//否则，尝试IE的方式 
		else if (elem.currentStyle) {
			return elem.currentStyle[name];
		}
		//或者W3C的方法，如果存在的话 
		else if (document.defaultView && document.defaultView.getComputedStyle) {
			//它使用传统的"text-Align"风格的规则书写方式，而不是"textAlign" 
			name = name.replace(/([A-Z])/g, "-$1");
			name = name.toLowerCase();
			//获取style对象并取得属性的值(如果存在的话) 
			var s = document.defaultView.getComputedStyle(elem, "");
			return s && s.getPropertyValue(name);
			//否则，就是在使用其它的浏览器 
		} else {
			return null;
		}
	}
	var clipWidth = 200;
	var clipHeight = 200;
	function buildClip(x, y, width, height) {
		var rect = "rect(" + (y - clipHeight / 2 + "px,")
				+ ((x + clipWidth - clipWidth / 2) + "px,")
				+ ((y + clipHeight - clipHeight / 2) + "px,")
				+ (x - clipWidth / 2 + "px") + ")";
		return rect;
	}


