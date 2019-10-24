var content = document.getElementsByClassName("content")[0],
	val = document.getElementsByClassName("val")[0],
	text = document.getElementsByClassName("text")[0],
	video = document.getElementsByTagName("video")[0];
	
// 给目标区域添加dragover事件方法
content.addEventListener("dragover",function(e){
	// 取消默认事件
	e.preventDefault();
});
// 给目标区域添加drop事件方法
content.addEventListener("drop",function(e){
	// 取消drop默认事件:视频自动打开
	e.preventDefault();
	// 提取拖拽上传的file对象
	file = e.dataTransfer.files[0];
	// 使用构造函数
	var fileLoader = new FileLoader(file,events);
})

// 用户自定义部分
var events = {
	// 进度条以及百分比显示
	progressIng : function(per){
		val.style.width = per * 250 + "px";
		text.innerHTML = Math.round(per * 100) + "%";
	},
	// 上传中
	stepLoad : function(loaded){
		console.log('上传了'+loaded);
	},
	// 上传完成
	finlish : function(result){
		console.log('上传完成');
		var img = new Image();
		img.src = result;
		document.body.appendChild(img);
	}
}