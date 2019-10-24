var num =0;
function add(){
	num = ++num;
	console.log(num);
}
function reduce(){
	num = --num;
	console.log(num);
}
//通过调用HTML元素
var div1 = document.getElementById("div1");
// div1.onclick = add;
// div1.onclick = null;

//通过调用系统提供的方法,可以绑定多个事件，主流的方式。
//添加方法
// div1.addEventListener("click",add);
// div1.addEventListener("click",reduce);
//删除方法
// div1.removeEventListener("click",add)

//事件对象
div1.addEventListener("click",object);
function object(event){
	var e = event || window.event;
	console.log(e);
	event.preventDefault();
	//调用HTML元素取消默认操作：
	//return false;
}
var text1 = document.getElementById("text1")
text1.addEventListener("keydown",object);