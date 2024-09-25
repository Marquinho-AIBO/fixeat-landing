$(window).scroll(function() {
	if ($(document).scrollTop() > 0) {
		$('header').addClass('small');
	} else {
		$('header').removeClass('small');
	}
});

$(document).ready(function() {
	$(function() {
		var pull = $('#pull');
		menu = $('#cssmenu');
		menuHeight = menu.height();
		$(pull).on('click', function(e) {
			//e.preventDefault();
			menu.slideToggle();
		});
		$(window).resize(function() {
			var w = $(window).width();
			if (w > 320 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});
	});
	$("#cssmenu").click(function(e) {
		//e.preventDefault();
		if ($(window).width() < 1100) {
			menu.slideToggle();
		} else {}
		if ($("#pull").hasClass("open")) {
			$("#pull").removeClass("open")
		}
		//$("#pull").toggleClass('open');
	})
	$('#pull').click(function() {
		$(this).toggleClass('open');
	});

	$(".link-video").click(function() {
		event.preventDefault();
		$("#modal-video").show("fadein");
		$('.modal-content iframe').attr('src', 'https://www.youtube.com/embed/N1U1ADtP1RE');
	});
	$("#modal-video").click(function() {
		event.preventDefault();
		$("#modal-video").hide("fadeout");
		$('.modal-content iframe').attr('src', '');
	});
	
});

$(document).on('click', 'a[href^="#"]', function(event) {
	event.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 500);
});