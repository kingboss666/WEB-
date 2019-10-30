import obj from "./variable.js";
import TimeReplacement from "./timer.js";
import {musicPlay,musicPause} from "./musicState.js";
import song from "./songFun";
// 按下播放按钮
obj.oBtn.onclick = () => {
	if (obj.oAudio.paused) {
		musicPlay();
	} else {
		musicPause();
	}
}
// 上下曲
obj.last.onclick = () => {
	obj.i--;
	song(obj.i);
}

obj.next.onclick = () => {
	obj.i++;
	song(obj.i);
}
//音乐播放结束
obj.oAudio.onended = () => {
	obj.i++;
	musicPause();
	obj.oProActive.style.width = 8 + "px";
	song(obj.i);
	obj.oCurrentTime.innerHTML = TimeReplacement(0);
}