var index;
$('.itme').click(function() {
	$('.itme').hide();
	$(this).show();
	$(this).addClass('active');
	index = $(this).index();
	$('.back').css('display', 'block');
})

$('ul').on('swipeLeft', '.active', function() {
	if(index < 7){
		move('next', this);
	}
});
$('ul').on('swipeRight', '.active', function() {
	if(index > 0){
		move('prve', this);
	}
});

function move(action, _this) {
	$('.active').removeClass('active');
	$('.itme').hide();
	if (action == 'next') {
		$(_this).next().show();
		$(_this).next().addClass('active');
		index++;
	}
	if (action == 'prve') {
		$(_this).prev().show();
		$(_this).prev().addClass('active');
		index--
	}
}

$('.back').click(function(){
	$('.back').css('display', 'none');
	$('.active').removeClass('active');
	$('.itme').show();
});