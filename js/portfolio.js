
$('#gallery').rowHeight = 4;
$( document ).ready(function() {
	var gallery = $('#gallery').justifiedGallery({
		rowHeight: 200,
		lastRow: 'justify',
		margins: 3,
		randomize: true
	});

	gallery.on('jg.complete', function () {
        alert('the gallery is complete');
        $('#gallery a').swipebox({hideBarsDelay: false});
    });
});