// (1)web浏览器
function ajax(method, url, callback, data, flag) {
	// (2)ajax对象
	var xml = null;
	if (window.XMLHttpRequest) {
		xml = new XMLHttpRequest();
	} else {
		xml = new ActiveXObject('Microsoft.XMLHttp');
	}

	// (3)初始化HTTP请求参数(请求方式,地址,同步异步)
	// (4)发送请求
	method = method.toUpperCase(); //小写装换成大写
	if (method == 'POST') {
		xml.open(method, url, flag);
		xml.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
		xml.send(data);
	} else if (method == 'GET') {
		var date = new Date;
		xml.open(method, url + '?' + data + '&date=' + date.getTime(), flag);
		xml.send();
	};

	// (5)监控数据
	xml.onreadystatechange = function() {
		if (xml.readyState == 4) {
			// (6)检查数据使用
			if (xml.status == 200) {
				callback(xml.responseText);
			}
		}
	}
}