(function($) {
	var page = {
		init: function(dom, obj) {
			this.fillHTML(dom, obj);
			this.bindEvent(dom, obj);
		},
		// 生成DOM结构
		fillHTML: function(dom, obj) {
			dom.empty();
			// 容错
			if (obj.pageCount < 1 || obj.current < 1 || obj.pageCount < obj.current) {
				return;
			}
			// 生成上一页
			if (obj.current == 1) {
				dom.append('<a href="javascript:;" class="disabled"><上一页</a>');
			} else {
				dom.append('<a href="javascript:;" class="prev"><上一页</a>');
			}
			// 生成页码
			if (obj.pageCount <= 7) {
				for (var i = 1; i <= obj.pageCount; i++) {
					if (i == obj.current) {
						dom.append('<span class="active">' + obj.current + '</span>');
					} else {
						dom.append('<a href="javascript:;" class="page">' + i + '</a>');
					}
				}
			} else {
				// 生成开头打点
				if (obj.current > 4) {
					dom.append('<a href="javascript:;" class="page">1</a>');
					dom.append('<span class="omit">...</span>')
				}
				var start = obj.current - 2,
					end = obj.current + 2;
				if (obj.current <= 4) {
					start = 1
					end = 6;
				} else if (obj.current >= obj.pageCount - 3) {
					start = obj.pageCount - 5;
					end = obj.pageCount;
				}
				// 生成结构
				for (; start <= end; start++) {
					if (start == obj.current) {
						dom.append('<span class="active">' + obj.current + '</span>');
					} else {
						dom.append('<a href="javascript:;" class="page">' + start + '</a>');
					}
				}
				// 生成结尾打点
				if (obj.pageCount - obj.current > 3) {
					dom.append('<span class="omit">...</span>')
					dom.append('<a href="javascript:;" class="page">' + obj.pageCount + '</a>');
				}
			}
			// 生成下一页
			if (obj.current == obj.pageCount) {
				dom.append('<a href="javascript:;" class="disabled">下一页></a>');
			} else {
				dom.append('<a href="javascript:;" class="next">下一页></a>');
			}

		},
		// 事件绑定
		bindEvent: function(dom, obj) {
			var _this = this
			// 点击page按钮
			dom.on('click', '.page', function() {
				obj.current = parseInt($(this).text());
				_this.fillHTML(dom, obj);
				obj.cbs();
			});
			dom.on('click',function(e){
				var target = e.target;
				if( target.className == 'prev'){
					obj.current--;
				}else if(target.className == 'next'){
					obj.current++;
				}else{
					return;
				}
				_this.fillHTML(dom, obj);
				obj.cbs();
			});
		}
	}

	// 加到JQuery实例方法中
	$.fn.paging = function(options) {
		page.init(this, options);
	}
})($);
