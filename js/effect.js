$(document).ready(function(){
	$('.chosse').click(function(){
		$(this).siblings().slideToggle(400);
		$(this).toggleClass('setf');
		$(this).parent().removeClass('show');
	});
	$('.search-toggle').click(function(){
		$(this).siblings().slideToggle(500);
	});
	$('.navbar-toggler').click(function(){
		$(this).toggleClass("icon_bar")
	});
	$('.click_tabs').click(function(){
		$('.click_tabs').removeClass("tabs");
		$(this).toggleClass("tabs");
	});
	$('.icon_down').click(function(){
		$(this).parents('.nav-item').toggleClass('hover_menu_down')
	});
	var count = 0;
    $("#minus_").click(function(){
        if (count > 0) {
        count--;
        $("#number_adu").val(+count);
    }
    });
    $("#plus_").click(function(){
        count++;
        $("#number_adu").val(+count);
    });
    var count_ = 0;
    $("#minus_1").click(function(){
        if (count > 0) {
        count_--;
        $("#number-child").val(+count_);
    }
    });
    $("#plus_1").click(function(){
        count_++;
        $("#number-child").val(+count_);
    });
    
});
$(document).ready(function() {
	var showCharpage = 300;
	var ellipsestextpage = "...";
	var showCharpage2 = 155;
	var ellipsestextpage2 = "...";
	$('.text-why').each(function() {
		var contentpage = $(this).html();
		if(contentpage.length > showCharpage) {
			var c = contentpage.substr(0, showCharpage);
			var h = contentpage.substr(showCharpage-1,
			contentpage.length - showCharpage);
			var html = c + '<span class="moreellipses">' +
			ellipsestextpage+ '&nbsp;</span><span class="morecontent"><span>' 
			+ h;

			$(this).html(html);
		}
	});
	$('.content_des').each(function() {
		var contentpage2 = $(this).html();
		if(contentpage2.length > showCharpage2) {
			var c = contentpage2.substr(0, showCharpage2);
			var h = contentpage2.substr(showCharpage2-1,
			contentpage2.length - showCharpage2);
			var html = c + '<span class="moreellipses">' +
			ellipsestextpage2+ '&nbsp;</span><span class="morecontent"><span>' 
			+ h;

			$(this).html(html);
		}
	});
});

var dropdown = function () {
var dropdownStyle1 = $('[data-layout="dropdown"]');
    $(window).click(function () {
        $('.vk-dropdown').find('._list').collapse('hide');
    });

    $('.vk-dropdown').click(function(event){
        event.stopPropagation();
    });

    dropdownStyle1.each(function(){
        var text = $(this).find('._list a.active ._content').text();
        var _current = $(this).find('._current ._text');
        // console.log(text);
        _current.text(text)
    });
    dropdownStyle1.on('click', function (e) {
        var _this = $(this);
        var parent = _this.closest('.vk-dropdown');
        var text = _this.find('._text');
        var list = _this.find('._list');
        var item = _this.find('a');
        var input = list.find('input');

        list.on('hide.bs.collapse', function () {
            parent.removeClass('active')
        });
        list.on('show.bs.collapse', function () {
            parent.addClass('active')
        });
        list.collapse('toggle');
        item.on('click', function (e) {
            var target = $(this).find('._content').html();
            item.removeClass('active');
            text.html(target);
            $(this).addClass('active');
            input.val($(this).data('value'));
        });
    });
}();
