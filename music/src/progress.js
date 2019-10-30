import obj from "./variable.js";
import TimeReplacement from "./timer.js";
import {musicPlay} from "./musicState.js";
//拖动进度条
obj.oRadioBox.onmousedown = () => {
	clearInterval(obj.sil);
	document.body.onmousemove = e => {
		let activeLen = e.clientX - obj.oProBox.getBoundingClientRect().left;
		if (activeLen < 8) {
			activeLen = 8;
		} else if (activeLen > 240) {
			activeLen = 240;
		}
		obj.oProActive.style.width = activeLen + "px";
		obj.audioCurrentTime = (activeLen - 8) / obj.bgWidth *obj. oDuration;
		obj.oCurrentTime.innerHTML = TimeReplacement(obj.audioCurrentTime);
	}
	document.body.onmouseup = () => {
		document.body.onmousemove = null;
		document.body.onmouseup = null;
		musicPlay();
		obj.oAudio.currentTime = obj.audioCurrentTime;
	}
}