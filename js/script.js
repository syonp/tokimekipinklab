$(function () {
	var pageWidth = 1080; // ページの幅を定義
	var pageHeight = 540; // ページの高さを定義

	$('.flipbook').turn({
		width: pageWidth,
		height: pageHeight,
		elevation: 50,
		gradients: true,
		autoCenter: true
	});

	$(window).resize(function () {
		var w = $(window).width();
		var h = $(window).height();
		var scale = Math.min(w / pageWidth, h / pageHeight) * 0.9;
		$('.flipbook').turn('size', pageWidth * scale, pageHeight * scale);
	}).resize();

});

