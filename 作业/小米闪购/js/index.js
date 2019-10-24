var tabss = document.getElementById("tabss").getElementsByTagName("li");
var goods = document.getElementById("goods").getElementsByTagName("ul");
var navfixed = document.getElementById("seckill-navfixed");
var navList = document.getElementById("navList").getElementsByTagName("li");
for(var i=0; i<tabss.length;i++){
	tabss[i].onclick = getlist;
}

for(var i=0;i<navList.length;i++){
	navList[0].onmousemove = function(){
		this.className = "nav-category show";
	}
	navList[0].onmouseout = function(){
		this.className = "nav-category";
	}
}

function getlist(){
	for(i=0; i<tabss.length;i++){
		if(tabss[i]===this){
			tabss[i].className = "active";
			goods[i].className = "clearfix swich";
		}else{
			tabss[i].className = "";
			goods[i].className = "clearfix Exhibition";
		}
	}
}

window.onscroll = function(){
	var scrolltop = document.documentElement.scrollTop;
	if(scrolltop >= 260){
		navfixed.className="seckill-nav navfixed";
	}else{
		navfixed.className="seckill-nav";
	}
}

//倒计时
var count = document.getElementById("Count").getElementsByTagName("em")[0];
var t1 = new Date("2019/8/18 20:00");
countDown();
setInterval(countDown,1000);

function countDown(){
	//倒计时
	var num = Math.floor((t1.getTime() - Date.now())/1000);
	// console.log(num);
	//秒
	var s = num % 60;
	//分
	var num2 = Math.floor(num/60);
	var m = num2%60;
	//时
	var num3 = Math.floor(num2/60);
	var h = num3 % 24
	
	h = h<10?"0"+h:h;
	m = m<10?"0"+m:m;
	s = s<10?"0"+s:s;
	
	count.innerHTML = "抢购中<br />距结束 "+h+":"+m +":"+s;	
}