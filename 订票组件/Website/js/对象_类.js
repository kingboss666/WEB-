var obj1 = {
	x : 0,
	"x" : 1,
}

//定义对象
// var person1 = {
// 	name : "xiaoming",
// 	sex : "male",
// 	age : "18",
// 	slogan : function(){
// 		for (var i=0;i<=10;i++){
// 			console.log("wo shi xiaoming");
// 		}
// 	}
// }

//遍历对象
// for(var Pn in person1){
// 	console.log(Pn+" : "+person1[Pn]);
// }

// 创建类
function PersonClass(pName,pSex,pAge){
	this.name = pName || "xiaoming";
	this.sex = pSex || "male";
	this.age = pAge || "18";
	this.slogan = function(){
		for (var i=0;i<=10;i++){
			console.log("wo shi "+ this.name);
		}
	}
	
}
var person1 = new PersonClass();
var person2 = new PersonClass("xiaohong");