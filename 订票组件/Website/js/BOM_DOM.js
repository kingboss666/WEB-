// var cc=1;
// console.log(window.cc)


//弹窗
// 同步:阻断
// alert("alert 弹窗");
//同步：阻断 有返回值（true/false） 
// var bcf = confirm("confirm 弹窗");
// console.log("点击了"+bcf)
//同步:阻断 可以输入
// var straf = prompt("prompt 输入:","默认值是King");
// console.log("输入："+straf)

//导航栏
// window.location
//刷新页面
// location.reload();
//打开新的页面
// location.replace("http://www.baidu.com/")

//前进 后退按钮
// history.forward()前进
// history.back()后退
// history.go(-∞/∞)前进后退几次

//浏览器信息
// navigator
// 获取浏览器分辨率
// screen

//计时器
// 循环执行:var sil = setInterval(函数名,时间);
// 	停止:clearInterval(sil);
// 一次执行:var sil = setTimeout(函数名,时间);
// 	停止:clearTimeout(sil);
// var num = 0;
// function add(){
// 	console.log("num="+ ++num);
// }
// function end(){
// 	clearInterval(sil)
// }
// var sil = setInterval(add,1000);
// setTimeout(end,10000)


//添加一个节点
// var div1 = document.getElementById("div1");
// var p =document.createElement("p");
// var ptxt = document.createTextNode("p1");
// p.appendChild(ptxt);
// div1.appendChild(p);
//删除节点
// var div2 = document.getElementById("div2");
// div1.removeChild(div2);
// div2.parentNode.removeChild(div2);

// 修改标签属性
// var img1 =document.getElementById("img1");
// img1.src="images/baidu.png";
// img1.className = "box2";
// css样式修改
// img1.style.width = "100px";
//获取属性
// img1.getAttribute("dat");
// 添加属性
// img1.setAttribute("dat1","11");
// 删除属性
// img1.removeAttribute("dat");

// 修改标签内容
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
//附带标签加入
p1.innerHTML = "这是innerHTML  <a href='http://www.baidu.com'>百度</a>";
//纯文本加入
p2.textContent = "这是innerHTML  <a href='http://www.baidu.com'>百度</a>";