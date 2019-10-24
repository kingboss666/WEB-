var btn = document.getElementsByClassName("btn")[0],
	list = document.getElementsByClassName("gn-list")[0];

btn.onclick = function(){
	if(document.getElementsByClassName("gn-active")[0]){
		list.classList.remove("gn-active");
	}else{
		list.classList.add("gn-active");
	}
}