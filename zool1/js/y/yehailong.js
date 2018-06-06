/*浮动的泡泡*/
(function() {
    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';//255
            ctx.fill();
        };
    }

})();
/*叶海龙浮动效果*/
for(i=1;i<100;i++){
$(document).ready(function(){
   for(j=10;j<60;j++){
    $("#yehailong1").animate({
      top:"7%",
      left:j+"%"
    });
    $("#yehailong1").animate({
      top:"8%",
      left:j+"%"
    });
}
 for(j=60;j>10;j--){
    $("#yehailong1").animate({
      top:"7%",
      left:j+"%"
    });
    $("#yehailong1").animate({
      top:"8%",
      left:j+"%"
    });
}
});

$(document).ready(function(){
   for(k=7;k<60;k++){
    $("#yehailong2").animate({
      top:k+"%"
    });
    k2=k+2;
    $("#yehailong2").animate({
      top:k2+"%"
    });
}
for(k=60;k>7;k--){
    $("#yehailong2").animate({
      top:k+"%"
    });
    k2=k+2;
    $("#yehailong2").animate({
      top:k2+"%"
    });
}
});

$(document).ready(function(){
   for(l=55;l>10;l--){
    $("#yehailong3").animate({
      top:l+"%"
    });
    l2=l-2;
    $("#yehailong3").animate({
      top:l2+"%"
    });
}
for(l=10;l<55;l++){
    $("#yehailong3").animate({
      top:l+"%"
    });
    l2=l-2;
    $("#yehailong3").animate({
      top:l2+"%"
    });
}
});

$(document).ready(function(){
	for(m=75;m>30;m--){
    $("#yehailong4").animate({
      left:m+"%",
      top:"54%"
    });
    $("#yehailong4").animate({
      left:m+"%",
      top:"55%"
    });
    }
    for(m=30;m<75;m++){
    $("#yehailong4").animate({
      left:m+"%",
      top:"54%"
    });
    $("#yehailong4").animate({
      left:m+"%",
      top:"55%"
    });
    }
});
}
/*字体效果*/
$(function () {
	$('.text').textillate({
		initialDelay: 5000, 	//设置动画开始时间
		in: { effect: 'flipInX'	//设置动画名称
		}
	});
})
