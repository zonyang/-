$(function(){
	$(".img").hover(function(){
		$(this).addClass("on");
		$(this).animate({left:"-=10%",top:"-=10%"},100);
		},function(){
		$(this).removeClass("on");
		$(this).animate({left:"+=10%",top:"+=10%"},100);
		});
		$("#content-1").hide(100).show(100)
        .html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;猞猁西伯利亚亚种是猞猁的亚种之一。体型中等，体粗壮，尾极短，通常不及头体长的1/4");
    $("#content-2").hide(100).show(100)
        .html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其为喜寒动物,一般分布于俄罗斯亚洲区，西伯利亚东部至斯塔诺夫山脉和叶尼塞河东岸");
     $("#content-3").hide(100).delay(1000).show(100)
	 .html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;猞猁喜欢吃野兔。还有麝、狍子、鹿之类和类似的家畜。食谱相当广泛");
	 $("#content-4").hide(100).delay(1000).show(100)
	 .html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;猞猁作为濒危动物被列人《世界自然保护联盟》2012年濒危物种红色名录的低危程度级别");
	 
	 $("#dot1").hide(100).show(500);
	$("#dot2").hide(100).delay(200).show(500);
	$("#dot3").hide(100).delay(400).show(500);
	$("#dot4").hide(100).delay(500).show(500);
	$("#dot5").hide(100).delay(600).show(500);
	$("#dot6").hide(100).delay(800).show(500);
	$("#dot7").hide(100).delay(700).show(500);
	$("#dot7").hide(100).delay(400).show(500);
});
			