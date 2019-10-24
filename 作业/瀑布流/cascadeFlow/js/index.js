var oLi = document.getElementsByTagName('li');
var flog = true;
var num = 1;

function send() {
	if (flog) {
		ajax('GET', './getPics.php', dealData, 'cpage=' + num, true);
		flog = false;
		num++;
	}
}
send();

function dealData(data) {
	data = JSON.parse(data);

	if (data.length > 0) {
		flog = true;
		// console.log(data);
		data.forEach(function(ele, index) {
			var oItem = document.createElement('div');
			var oP = document.createElement('p');
			oItem.className = 'item';
			var img = new Image;
			img.src = ele.image;
			oP.innerText = ele.title;
			img.height = 230 * ele.height / ele.width;
			oItem.appendChild(img);
			oItem.appendChild(oP);
			oLi[findShortest(oLi)].appendChild(oItem);
		});
	} else {
		alert('数据全部加载完了');
	}
}

function findShortest(list) {
	var len = list.length;
	var min = list[0].offsetHeight;
	var index = 0;
	for (var i = 1; i < len; i++) {
		if (min > list[i].offsetHeight) {
			min = list[i].offsetHeight;
			index = i;
		}
	}
	// console.log(min + ' ' +index);
	return index;
}

window.onscroll = function() {
	var index = findShortest(oLi);
	var h = oLi[index].offsetHeight;

	var scrollHehight = document.documentElement.scrollTop || document.body.scrollTop;
	var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

	if (scrollHehight + clientHeight > h) {
		send();
	}
}
