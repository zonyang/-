$(function () {
		const click = isMobile() ? "tap" : "click";
		const down = isMobile() ? "touchstart" : "mousedown";
		const up = isMobile() ? "touchend" : "mouseup";
		const mo = isMobile() ? "touchmove" : "mousemove";
		/****************添加引用文件******************/
		if (isMobile()) {
			const touch = document.createElement('script');
			touch.src = "js/touch.js";
			document.body.appendChild(touch);
			const fx = document.createElement('script');
			fx.src = "js/fx.js";
			document.body.appendChild(fx);
		}

		/****************轮播图******************/
		const $ro = $("#roll-list li");
		let rollWidth = $ro[0].offsetWidth;
		const listNum = $ro.length;
		const ulWidth = rollWidth * listNum;
		const $rollList = $("#roll-list");
		let currentIndex = 1,
			rollLeft = 0;

		//初始化
	$rollList.css("width", ulWidth + "px");
		$ro.css("width", rollWidth);
		$rollList.css("left", -rollWidth + "px");
		$(window).resize(function () {
			clearTimeout($rollList.timer);
			rollWidth = $("#roll")[0].offsetWidth;
			$("#roll-list li img").css("width", rollWidth);
			$rollList.css("width", rollWidth * listNum + "px");
			$ro.css("width", rollWidth);
			$rollList.timer = setInterval(move, 2000);
		});

		function move() {
			currentIndex++;
			if (currentIndex >= listNum - 1) {
				currentIndex = 1;
			}
			if (currentIndex <= 0) {
				currentIndex = listNum - 2;
			}
			rollLeft = -rollWidth * currentIndex;
			$rollList.css("left", rollLeft + "px");
		}

		$rollList.timer = setInterval(move, 2000);


		$rollList.off(up).on(up, function () {
		});
		$rollList.off(down).on(down, function (e) {
			clearTimeout($rollList.timer);
			let star =
				isMobile() ? event.changedTouches[0].clientX : event.clientX;
			let left = -rollWidth * currentIndex;
			let dist = star - $("#roll")[0].offsetLeft;
			$rollList.on(mo, function (e) {
				e.clientX = isMobile() ? event.changedTouches[0].clientX : event.clientX;
				rollLeft = left - (dist - e.clientX);
				$rollList.css("left", rollLeft + "px");
				return false;
			});
			$("#roll-list").off(up).on(up, function (e) {
				e.stopPropagation();
				$rollList.off('mousemove');
				let end =
					isMobile() ? event.changedTouches[0].clientX : event.clientX;
				if (star > end) {
					move();
				} else if (star < end) {
					currentIndex -= 2;
					move();
				}
				$rollList.timer = setInterval(move, 2000);
			});
		});

		/**********************手控图************************/
		const $move = $(".move li");
		const photoWidth = $(".photos li")[0].offsetWidth;
		const width = (photoWidth + 16) * 4 + "px";
		const $photos = $(".photos");
		$photos.css("width", width);
		$move.on("mouseenter", function (e) {
			this.style.transition = "all 0.2s ease";
			this.style.transform = "translate(0,-5px)";
		}).on("mouseleave", function (e) {
			this.style.transition = "all 0.2s ease";
			this.style.transform = "translate(0,0)";
		});
		let contain = $(".container")[0].offsetWidth;
		let iLeft = 0;
		const $left = $("#left");
		const $right = $("#right");
		$(".arrow").on("mouseenter", function (e) {
			this.style.transition = "all 0.2s ease";
			this.style.transform = "translate(10px,0)";
		}).on("mouseleave", function (e) {
			this.style.transition = "all 0.2s ease";
			this.style.transform = "translate(0,0)";
		});
		$right.on(click, function () {
			$left.show();
			iLeft = $photos[0].offsetLeft - photoWidth;
			if (($photos[0].offsetWidth + iLeft) - 30 <= contain) {
				iLeft = -($photos[0].offsetWidth - contain);
				this.style.display = "none";
			}
			$photos.animate({
				left: iLeft
			})
		});
		$left.on(click, function () {
			$right.show();
			iLeft = $photos[0].offsetLeft + photoWidth;
			if (iLeft >= -30) {
				iLeft = 0;
				this.style.display = "none";
			}
			$photos.animate({
				left: iLeft
			})
		});
		const $phoneNav = $("#phoneNav a");
		$phoneNav.on(click, function () {
				for (let i = 0, length = $phoneNav.size(); i < length; i++) {
					let $lists = $($phoneNav[i]).children();
					if ($lists[1].className === "active") {
						$($lists[0]).toggleClass("active");
						$($lists[1]).toggleClass("active");
					}
				}
				let $children = $(this).children();
				for (let i = 0, length = $children.size(); i < length; i++) {
					$($children[i]).toggleClass("active");
				}
			}
		);
	}
)
;