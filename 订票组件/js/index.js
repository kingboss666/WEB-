var btn = document.getElementById("btn");
var oSpan = document.getElementsByTagName("span");
var change = false;

btn.onclick = function(){
	for(var i = 0;i < oSpan.length;i++){
		oSpan[i].className = change?"item":"item1";
	}
	change = !change;
}