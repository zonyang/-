
$(function (){
var atext = '<span id="atext">&nbsp;&nbsp;点我试试&nbsp;&nbsp;</br>&nbsp;&nbsp</span>';
//给a标签中的文字添加一个能被jquery不获得元素
$('#button3').append(atext);
//模拟点击a标签里的文字
$('#atext').click(function(){
$(".demo").css('display','none');
textZ();
animalZ();
})
})

/*文字效果*/
function textZ(){
$(document).ready(function(){
	$("#title-z").delay(1000);
    $("#title-z").animate({
      height:'show'
    },1000);
    $("#introduction-z").delay(2000);
    $("#introduction-z").animate({
      height:'show'
    },2000);
});
}
/*动物的运动效果*/
function animalZ(){
  /*朱鹮1的效果*/
$(function (){
   $("#border1-z").delay(4000);//延时
   $("#border1-z").fadeIn(3000);
   $("#border1-z").delay(5000);
   $("#border1-z").animate({left:"60%",top:"30%"},3000);
});

/*朱鹮2的效果*/
$(function (){
	$("#border2-z").delay(6000);//延时
    $("#border2-z").fadeIn(3000);
    $("#border2-z").delay(7000);
    for(m=56,n=10;n<40;n+=2){
    m-=4;
    $("#border2-z").animate({
	   top:m+"%",
    left:n+"%"},500);
    m+=4;
    n+=2;
    $("#border2-z").animate({
  	top:m+"%",
    left:n+"%"},300);
    }
});

/*朱鹮3的效果*/
$(function (){
	$("#border3-z").delay(7000);//延时
    $("#border3-z").fadeIn(3000);
    $("#border3-z").delay(8000);
   $("#border3-z").animate({
   	left:"50%",top:"60%"},5000);
});

/*朱鹮4的效果*/
$(function (){
	$("#border4-z").delay(4000);//延时
    $("#border4-z").fadeIn(3000);
     $("#border4-z").delay(5000);
   $("#border4-z").animate({
   	left:"30%",
   	top:"20%"},5000);
});
}

/*雨的效果*/
$(function () {
var W = 1350, H = 600 ,angle = 0, len = 30, count = 300;
var canvas = $("#myCanvas")[0];
ctx = canvas.getContext('2d');
ctx.strokeStyle = 'rgba(255,255,255, 0.7)';
var run = setInterval(draw, 200);
function draw() {
 ctx.clearRect(0, 0, 1400,1000);
 rains();
}
function rain(x, y, r) {
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x + angle, y + len);
ctx.lineWidth = 2;
ctx.stroke();
}
function rains() {
for (var i = 1; i <= count; i++) {
rain(Math.random() * W, Math.random() * H, angle);
}
}
});

  