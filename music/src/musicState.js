import obj from "./variable.js";
import TimeReplacement from "./timer.js";
// 音乐播放
const musicPlay = () => {
	obj.oAudio.play();
	obj.oPlayBtn().classList = "iconfont icon-zanting";
	obj.sil = setInterval(promove, 200);
	obj.audioImg.style.animationPlayState = "running";
}

// 音乐暂停
const musicPause = () => {
	obj.oAudio.pause();
	obj.oPlayBtn().classList = "iconfont icon-bofang";
	clearInterval(obj.sil);
	obj.audioImg.style.animationPlayState = "paused";
}

// 进度条
const promove = () => {
	obj.oCurrentTime.innerHTML = TimeReplacement(obj.oAudio.currentTime);
	let proWidth = obj.oAudio.currentTime / obj.oDuration * obj.bgWidth;
	obj.oProActive.style.width = proWidth + 8 + "px";
	// console.log(1)
}

export{musicPlay,musicPause};