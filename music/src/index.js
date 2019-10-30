import "./volume"
;
import "./changing";
import "./progress";
import obj from "./variable.js";
import TimeReplacement from "./timer.js";
import "./index.scss";

// 初次加载音乐时间
setTimeout(function(){
	obj.oDuration = obj.oAudio.duration;
	obj.oAllTime.innerHTML = TimeReplacement(obj.oDuration);
},100)

//资源加载完成后
window.onload = function() {
	//时间初始化
	obj.oCurrentTime.innerHTML = TimeReplacement(0);
	//图片旋转初始化
	obj.audioImg.style.animationPlayState = "paused";
}