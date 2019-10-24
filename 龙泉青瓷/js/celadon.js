//轮播图
var itemBox = document.getElementsByClassName("itme-box")[0],
	itemBoxLi = itemBox.getElementsByTagName("li");
var itemBoxLen = itemBoxLi.length,
	index = 1,
	sil = null;

function init() {
	//资源加载完成开始动画
	window.onload = function() {
		sil = setInterval(imgMove, 2500);
		var totop = document.getElementById("btn");
		var nav = document.getElementsByClassName("nav");
		var navTop = nav.offsetTop;
		var timer = null;
		var pageHeight = 100;
		totop.style.display = "none";
		totop.onclick = function() {
			timer = setInterval(function() {
				var backtop = document.documentElement.scrollTop || document.body.scrollTop;
				var speedTop = backtop / 5;
				document.documentElement.scrollTop = backtop - speedTop;
				if (backtop == 0) {
					clearInterval(timer);
				}
			}, 30);
		}
		window.onscroll = function() {

			var backtop = document.documentElement.scrollTop || document.body.scrollTop;
			if (backtop > pageHeight) {
				totop.style.display = "block";
			} else {
				totop.style.display = "none";
			}
			if (backtop >= navTop) {
				nav.style.position = "fixed";
				nav.style.top = "0";
				nav.style.left = "0";
				nav.style.zIndex = "100";
			} else {
				return false;
			}
		}
	}
	//鼠标进入
	itemBox.onmouseenter = function() {
		if (sil) {
			clearInterval(sil);
			sil = null;
			console.log("暂停");
		}
	}
	//鼠标移出
	itemBox.onmouseleave = function() {
		sil = setInterval(imgMove, 2500);
		console.log("开始");
	}
}

function imgMove() {
	for (var j = 0; j < itemBoxLen; j++) {
		if (index == j) {
			itemBoxLi[j].getElementsByTagName("a")[0].className = "active";
		} else {
			itemBoxLi[j].getElementsByTagName("a")[0].className = "";
		}
	}
	if (index == 3) {
		index = 0;
	}
	index++;
}
init();

//轮播
	var imgBox = document.getElementsByClassName("img-box")[0];
	var oImg = imgBox.getElementsByTagName("img");
	var seed = -10;
	var timer = setInterval(move , 16.6);
	function move(){
		seed -= 1;
		imgBox.style.left = seed + 'px';
		if(seed <= -2133){
			seed = 0;
		}
	}
	imgBox.onmouseenter = function(){
		clearInterval(timer);
		console.log("暂停");
	}
	imgBox.onmouseleave = function(){
		timer = setInterval(move , 16.6);
		console.log("开始");
	}
	