import obj from "./variable.js";
import TimeReplacement from "./timer.js";
import {musicPlay,musicPause} from "./musicState.js";

export default value => {
	// 切换歌曲时触发
	musicPause();
	if (value > 5) {
		obj.i = 1;
	} else if (value < 1) {
		obj.i = 5;
	}
	obj.audioImg.src = "../source/" + obj.i + ".jpg";
	obj.oAudio.src = "../source/" + obj.i + ".mp3";
	obj.oAudio.load();
	obj.oAudio.oncanplay = () => {
		obj.oDuration = obj.oAudio.duration;
		obj.oAllTime.innerHTML = TimeReplacement(obj.oDuration);
	}
	setTimeout(() => {
		musicPlay();
	}, 100)
}