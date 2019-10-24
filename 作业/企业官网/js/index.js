//咖啡介绍详细页面切换
// var coffeeItem = document.getElementsByClassName("coffee-item");
// var item = document.getElementsByClassName("item");
// var span = document.getElementsByClassName("coffee-name")[0].getElementsByTagName("span");
// var coffeeItemlen = coffeeItem.length;
// 
// for(var i = 0; i<coffeeItemlen; i++){
// 	coffeeItem[i].onclick = getitem;
// }
// function getitem(){
// 	for(var i=0;i<coffeeItem.length;i++){
// 		if(coffeeItem[i] == this){
// 			item[i].style.display = "block";
// 			span[i].className = "active";
// 		}else{
// 			item[i].style.display = "none";
// 			span[i].className = "";
// 		}
// 	}
// }
//咖啡介绍详细页面切换
var coffeeItems = Array.prototype.slice.call(document.getElementsByClassName("coffee-item"));
var activeCoffee = document.getElementsByClassName("active")[0];
var items = document.getElementsByClassName("item");
var activeItem = items[0];

coffeeItems.forEach(function(ele,index){
	ele.onclick = function(){
		//切换下标
		activeCoffee.classList.remove("active");
		activeCoffee = ele.getElementsByTagName("span")[0];
		activeCoffee.classList.add("active");
		
		//切换内容
		activeItem.style.display = "none";
		activeItem = items[index];
		activeItem.style.display = "block";
	}
})



// 滚轮对应页面位置有动画
var toRight = document.getElementsByClassName("toRigth");
var logoMove = document.getElementsByClassName("logoMove");
//获得窗口的高度
var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
//进入页面时自动先执行一次
move([
		{
			dom: toRight,
			move: "toRightAni"
		},
		{
			dom: logoMove,
			move: "logoMoveAni"
		}
	]);
//鼠标滚轮滚动
window.onscroll = function(){
	move([
		{
			dom: toRight,
			move: "toRightAni"
		},
		{
			dom: logoMove,
			move: "logoMoveAni"
		}
	]);
}
function move(list){
	list.forEach(function(ele,index){
		//文档距离顶部的高度
		var eleTop;
		//浏览器滚动条滚动过去的距离
		var scrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
		
		//列表长度
		var len = ele.dom.length;
		
		if(len){
			// dom 为列表的情况下
			for(var i =0;i<len; i++){
				eleTop = ele.dom[i].offsetTop;
				if(screenHeight + scrollHeight > eleTop){
					ele.dom[i].classList.add(ele.move);
				}
			}
		}else{
			// dom 为单个元素情况下
			eleTop = ele.dom.offsetTop;
			if(screenHeight + scrollHeight > eleTop){
				ele.dom.classList.add(ele.move);
			}
		}
	});
}