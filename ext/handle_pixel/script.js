document.addEventListener('DOMContentLoaded', () => {
	function zoom(zoom_type, save_cookie) {
		save_cookie = save_cookie === undefined ? true : save_cookie;

		var img = $('.shm-main-image');

		if(zoom_type === "full") {
			img.css('max-width', img.data('width') + 'px');
			img.css('max-height', img.data('height') + 'px');
		}
		if(zoom_type === "width") {
			img.css('max-width', '99%');
			img.css('max-height', img.data('height') + 'px');
		}
		if(zoom_type === "height") {
			img.css('max-width', img.data('width') + 'px');
			img.css('max-height', (window.innerHeight * 0.99) + 'px');
		}
		if(zoom_type === "both") {
			img.css('max-width', '99%');
			img.css('max-height', (window.innerHeight * 0.99) + 'px');
		}

		$(".shm-zoomer").val(zoom_type);

		if (save_cookie) {
			Cookies.set("ui-image-zoom", zoom_type, {expires: 365});
		}
	}

	$(".shm-zoomer").change(function(e) {
		zoom(this.options[this.selectedIndex].value);
	});
	$(window).resize(function(e) {
		$(".shm-zoomer").each(function (e) {
			zoom(this.options[this.selectedIndex].value, false)
		});
	});

	$("img.shm-main-image").click(function(e) {
		switch(Cookies.get("ui-image-zoom")) {
			case "both": zoom("width"); break;
			default: zoom("both"); break;
		}
	});

	if(Cookies.get("ui-image-zoom")) {
		zoom(Cookies.get("ui-image-zoom"));
	}
});
