// 时间装换
export default time => {
	let s = parseInt(time % 60) < 10 ? "0" + parseInt(time % 60) : parseInt(time % 60);
	let min = parseInt(time / 60) < 10 ? "0" + parseInt(time / 60) : parseInt(time / 60);
	return min + ":" + s;
}
