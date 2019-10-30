import obj from "./variable.js";
//音量初始化
obj.oVolumeValue.innerHTML = obj.oAudio.volume * 100;
obj.oVolumeActive.style.width = obj.oAudio.volume / 1 * obj.volumeWidth + 8 + "px";

//显示音量框
obj.volume.onclick = () => {
	if (obj.logic) {
		obj.volumeBox.style.display = "block";
	} else {
		obj.volumeBox.style.display = "none";
	}
	obj.logic = !obj.logic;
}

//拖动音量条
obj.oRadioBox2.onmousedown = () => {
	document.body.onmousemove = (e) => {
		let VolumeActiveLen = e.clientX - obj.oVolumeBar.getBoundingClientRect().left;
		if (VolumeActiveLen < 8) {
			VolumeActiveLen = 8;
		} else if (VolumeActiveLen > 180) {
			VolumeActiveLen = 180;
		}
		obj.oVolumeActive.style.width = VolumeActiveLen + "px";
		let audioVolume = (VolumeActiveLen - 8) / obj.volumeWidth;
		obj.oVolumeValue.innerHTML = parseInt(audioVolume * 100);
		obj.oAudio.volume = audioVolume;
	}
	document.body.onmouseup = () => {
		document.body.onmousemove = null;
		document.body.onmouseup = null;
	}
}