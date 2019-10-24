//创建构造函数
function FileLoader(file, events) {
	this.file = file; //传入文件
	this.reader = new FileReader();
	this.speed = 1024 * 1024; //每次上传多少数据,单位B
	this.loaded = 0; //已经上传的数据
	this.total = file.size; //需要上传的数据大小
	this.events = events; //传入用户定义的样式
	this.readBlob(this.file,0,this.speed);
	this.bindEvent();
}
// 定义构造函数方法
FileLoader.prototype = {
	// 文件一次上传函数
	readBlob: function(file, start, speed) {
		var reader = this.reader;
		if (file.slice) {
			// 浏览器支持file.slice方法
			var blob = file.slice(start, start + speed);
		} else {
			// 浏览器不支持file.slice方法
			var blob = file;
		}
		// console.log(blob);
		reader.readAsDataURL(blob);
	},
	// 文件读取过程函数
	bindEvent: function() {
		var reader = this.reader;
		var _this = this;
		// 数据正在读取中
		reader.onprogress = function(e) {
			_this.onProgress(e.loaded);
		}
		// 数据成功读取完成
		reader.onload = function() {
			_this.onLoad();
		}
	},
	// 文件上传修改进度条进度
	onProgress: function(num) {
		this.loaded += num;
		var per = this.loaded / this.total;
		if (per >= 1) {
			per = 1;
		}
		this.events.progressIng(per);
	},
	// 文件一次读取完成函数
	onLoad: function() {
		this.events.stepLoad(this.loaded);
		if (this.loaded < this.total) {
			// 全部数据加载未加载完成
			this.readBlob(this.file, this.loaded, this.speed);
		} else {
			// 全部数据加载完成
			this.events.finlish(this.reader.result);
		}
	}
}