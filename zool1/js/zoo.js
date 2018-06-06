// JavaScript Document

//所有页面滚动
$(function(){
	$.fn.fullpage({
		//slidesColor: ['#D09680', '#F90', '#F99', '#F90', '#F99', ''],
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '#menu'
	});
});


//最后一页地球

!function($){
  function touchHandler(event)
  {
      var touches = event.changedTouches,
          first = touches[0],
          type = "";

      switch(event.type)
      {
          case "touchstart": type = "mousedown"; break;
          case "touchmove":  type="mousemove"; break;        
          case "touchend":   type="mouseup"; break;
          default: return;
      }


      var mult = 1;
      
      if( navigator.userAgent.match(/Android/i) ) {
          mult = 10
      }
      var simulatedEvent = document.createEvent("MouseEvent");
      // var simulatedEvent = new MouseEvent(type, {
      //   view: window,
      // });
      simulatedEvent.initMouseEvent(type, true, true, window, 1,
                                first.screenX, first.screenY,
                                (first.clientX * mult), (first.clientY * mult), false,
                                false, false, false, 0, null);
      first.target.dispatchEvent(simulatedEvent);
  }
  
  var defaults = {
    autospin: "5000ms",
    angle: "20deg",
    glow: "rgba(255, 255, 255, 0.34902) 0px 0px 50px, inset 33px 20px 50px rgba(0,0,0,0.5)",
    pattern: "img/texture-earth.jpg",
    size: "100x100",
    //float: true,
    space: "body",
    // ring: true,
    // ringColor: "#fff",
    // ringAngle: "20deg"
  };
  $.fn.planetarium = function(options){
    var settings = $.extend({}, defaults, options);
        //$(settings.space).addClass("ptr-space")//添加背景
    el = $(this);
    document.addEventListener("touchstart", touchHandler, true);
    document.addEventListener("touchmove", touchHandler, true);
    document.addEventListener("touchend", touchHandler, true);
    document.addEventListener("touchcancel", touchHandler, true);
    
    
    el.each(function( index, value ) {
      var el2 = $(this);
      
      var autospin = el2.data("ptr-autospin")  || settings.autospin,
          angle = el2.data("ptr-angle")  || settings.angle,
          glow = el2.data("ptr-glow")  || settings.glow,
          pattern = el2.data("ptr-pattern")  || settings.pattern,
          newsize = el2.data("ptr-size")  || settings.size,
          newfloat = el2.data("ptr-float")  || settings.float,
          dimension = newsize.split("x");
  

      el2.addClass("ptr-shape");
      //地球样式
      el2.wrapInner("<div class='ptr-planet' id='bgEarth'></div>")
      el2.find(".ptr-planet").css({
        width: dimension[0],
        height: dimension[1],
        "box-shadow": glow,//阴影
        background: "url(" + pattern + ") repeat",
        "background-size": "cover",
        "-moz-background-size": "cover",
        "-webkit-background-size": "cover",
        "transform": "rotate(" + angle + ")",
        "-moz-transform": "rotate(" + angle + ")",
        "-webkit-transform": "rotate(" + angle + ")",//倾斜角度
      });
      
      //地球增加旋转样式      
      if ( autospin != false ) {
        el2.find(".ptr-planet").css({
          "animation": "rotate " + autospin +" infinite linear",
          "-webkit-animation": "rotate " + autospin +" infinite linear",
          "-moz-animation": "rotate " + autospin +" infinite linear"
        });
      }
      
      
      var $bg = el2.find(".ptr-planet"),
          // elbounds = {
          //   w: parseInt(el2.width()),
          //   h: parseInt(el2.height())
          // },
          origin = {x: 0, y: 0},
          offset = {x: 0, y: 0},//偏移量
          movecontinue = false;
      function move (e){
        var inbounds = {x: false, y: false};
        inbounds.x = true;
        if (movecontinue && inbounds.x) {
            offset.x = offset.x - (origin.x - e.clientX);
            offset.y = offset.y - (origin.y - e.clientY);
        }
        //$(this).css('background-position', offset.x + 'px ' + offset.y + 'px');
        $(this).find(".ptr-planet").css('background-position', offset.x + 'px ' + offset.y + 'px');
        origin.x = e.clientX;
        origin.y = e.clientY;
        e.stopPropagation();
        return false;
      }
      function handle (e){
          movecontinue = false;
          
          $bg.unbind('mousemove', move);

          if (e.type == 'mousedown') {
            $bg.parent().addClass("ptr-interacting");//停止动画
            origin.x = e.clientX;
            origin.y = e.clientY;
            movecontinue = true;
            $bg.parent().bind('mousemove', move);
          } else {
            $bg.parent().removeClass("ptr-interacting");
            $(document.body).focus();
          }

          e.stopPropagation();
          return false;
      }

      function reset (){
          start = {x: 0, y: 0};
          $(this).css('backgroundPosition', '0 0');
      }


      $bg.parent().bind('mousedown mouseup mouseleave', handle);
      //$bg.parent().bind('dblclick', reset);
      
    });
    
  }
  
  
}(window.jQuery);
//jQuery使用document.ready来保证所要执行的代码是在DOM元素被加载完成的情况下执行。
$(document).ready(function(){
       $(".planet").planetarium(
       // {
       //    space: "html, body"
       //  }
        );
});

//第一页云朵背景
function waterFloat(elm,t,d,v){
  var i = elm;
  //b1,900,3,11
  var runIt = function (elm,t,d,v) {
    elm.animate({top:'+='+v},t,"linear",function(){
    	$({deg: -d}).animate({deg: d}, {
        duration: t,
    		step: function(now){
    		  elm.css({
    			  transform: "rotate(" + now + "deg)"
    		  });
    		}
    	},"linear");});
    	elm.animate({top:'-='+v},t,"linear",function(){
    		$({deg: d}).animate({deg: -d}, {
      		duration: t,
      		step: function(now){
            elm.css({
              transform: "rotate(" + now + "deg)"
      			});
    			}
    		},"linear");
    		runIt(elm,t,d,v);
    	});	
  	//});
  }
  runIt(i,t,d,v);
}


