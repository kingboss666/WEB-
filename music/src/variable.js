module.exports = {
    sil: null,
    bgWidth: 232,
    oDuratio: null,
    volumeWidth: 172,
    logic: true,
    i: 1,
    oCurrentTime: document.getElementsByClassName("current-time")[0],
    oAllTime: document.getElementsByClassName("all-time")[0],
    oBtn: document.getElementsByClassName("btn")[0],
    oPlayBtn: function(){
        return this.oBtn.getElementsByTagName("i")[0];
    },
    oProActive : document.getElementsByClassName("active")[0],
    oProBox : document.getElementsByClassName("pro-box")[0],
    oRadioBox : document.getElementsByClassName("radio-box")[0],
    oAudio : document.getElementById("audio"),
    audioCurrentTime: function(){
        return this.oAudio.currentTime;
    }, 
    volume : document.getElementsByClassName("volume")[0],
    volumeBox : document.getElementsByClassName("volume-box")[0],
    oVolumeActive : document.getElementsByClassName("volume-active")[0],
    oVolumeValue : document.getElementsByClassName("volume-value")[0],
    oVolumeBar : document.getElementsByClassName("volume-bar")[0],
    oRadioBox2 : document.getElementsByClassName("radio-box-2")[0],
    last : document.getElementsByClassName("last")[0],
    next : document.getElementsByClassName("next")[0],
    audioImg : document.getElementsByClassName("main")[0].getElementsByTagName("img")[0]
}