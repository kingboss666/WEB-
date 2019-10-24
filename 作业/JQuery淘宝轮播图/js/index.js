var index = 0,
	max = 5,
	itemWidth = 520,
	sil;

function move(des) {
	clearTimeout(sil);
	$('.img-box').stop(false, true);
	// 检测按的是啥
	if (des == 'prev') {
		index--;
		// 如果图片是第一张，自动将位置调到最后一张
		if (index < 0) {
			$('.img-box').css('left', -itemWidth * max + 'px');
			index = 4;
		}
	} else if (des == 'next') {
		index++;
		// 如果图片是最后一张，自动将位置调到第一张
		if (index > max) {
			$('.img-box').css('left', '0px');
			index = 1;
		}
	}
	// 动画
	$('.img-box').animate({
		left: index * -itemWidth + 'px',
	}, function() {
		timer();
	});
	// 按钮随图片切换而切换
	active($('.item').eq(index == 5 ? 0 : index));
}
// 自动轮播计时器
function timer() {
	sil = setTimeout(function() {
		move('next');
	}, 3000);
	// console.log(sil);
}

// 切换底部按钮样式
function active(dom) {
	$('.active').removeClass('active');
	$(dom).addClass('active');
}

// 初始化事件
function init() {
	// 向上按钮
	$('.prevBtn').click(function() {
		move('prev');
	});
	// 向下按钮
	$('.nextBtn').click(function() {
		move('next');
	});
	// 点击底部按钮
	$('.item').click(function() {
		index = $(this).index();
		active(this);
		move('');
	});
}
timer();
init();