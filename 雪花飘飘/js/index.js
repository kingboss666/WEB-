//创建许多雪花
var snowArry = [];
var len = 500; //雪花数量
for (var i = 0; i < len; i++) {
	snowArry[i] = createSnow();
}

//雪花不断下落
setInterval(function() {
	for (var i = 0; i < len; i++) {
		snowMotion(snowArry[i]);
	}
}, 20);

//雪花创建构造函数
function createSnow() {
	var snowObject = {};

	//创建雪花div 并加入到 body中
	snowObject.snow = document.createElement("div");
	snowObject.snow.className = "snow";
	document.body.appendChild(snowObject.snow);

	SnowAtt(snowObject);
	return snowObject;
}

//雪花的原型函数
function SnowAtt(snowObject) {
	//起始top位置
	snowObject.firstTop = 0;
	//最终top位置
	snowObject.endTop = 400 + Math.random() * 300;
	//下落速度
	snowObject.topspeed = 1 + Math.random() * 3;

	//起始left位置
	snowObject.fisrstLeft = 0;
	//起始left位置
	snowObject.newLeft = Math.random() * 1470;
	//最大晃动幅度
	snowObject.maxleft = 30 + Math.random() * 30;
	//左右晃动速度
	snowObject.Leftspeed = Math.random() * 2;

	//雪花宽、高初始值
	snowObject.snow.style.width = 1 + Math.random() * 3 + "px";
	snowObject.snow.style.height = 3 + Math.random() * 3 + "px";

	//雪花初始颜色
	snowObject.snow.style.backgroundColor = "rgb(" + Math.random() * 255 + "," + Math.random() * 255 + "," + Math.random() * 255 + ")";
}

//雪花运动轨迹
function snowMotion(snowObject) {
	//下落轨迹
	snowObject.firstTop += snowObject.topspeed;
	snowObject.snow.style.top = snowObject.firstTop + "px";
	//下落至最大top位置后 重置属性
	if (snowObject.firstTop > snowObject.endTop) {
		SnowAtt(snowObject);
	}

	//左右晃动轨迹
	snowObject.fisrstLeft += snowObject.Leftspeed;
	snowObject.snow.style.left = snowObject.newLeft + snowObject.fisrstLeft + "px";
	//雪花晃动浮动大于最大晃动幅度改变其速度
	if (snowObject.fisrstLeft > snowObject.maxleft) {
		snowObject.Leftspeed = -snowObject.Leftspeed;
	}
	if (snowObject.fisrstLeft < 0) {
		snowObject.Leftspeed = -snowObject.Leftspeed;
	}
}
