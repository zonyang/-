$(function() {
	var $audio = $("audio")[0];
	$("#play").bind("touchstart", function() {
		if ($audio.paused) {
			$audio.play();
			$(this).css("animationPlayState", "running");
			$(this).css("webkitAnimationPlayState", "running");
			//$(this).addClass("play");
		}
		else {
			$audio.pause();
			$(this).css("animationPlayState", "paused");
			$(this).css("webkitAnimationPlayState", "paused");
			//$("#play").removeClass("play");
		}
	})
	//if ($audio.ended) {
	$("audio")[0].addEventListener('ended',function(){  
	//$("audio").ended( function() {
		$("#play").css("animationPlayState", "paused");
		$("#play").css("webkitAnimationPlayState", "paused");
	})
	$("#page1").bind("touchstart", function() {
		$("#page1").css("display","none");
		$("#page2").css("display","block");
		$("#page3").css("display","block");
		$("#page3").css("top","100%");
		setTimeout(function() {
			$("#page2").attr("class","page fadeOut");
			$("#page3").attr("class","page fadeIn");
		},5500);
	})



});
