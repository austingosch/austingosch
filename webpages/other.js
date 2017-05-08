$(document).ready(function() {

	// Creating an array of images that the buttons will cycle through.
	var backgrounds = [
		'http://i.imgur.com/MIDusbc.jpg',
		'http://i.imgur.com/Frla7FO.jpg',
		'http://i.imgur.com/VzAfkDn.jpg',
		'http://i.imgur.com/DjLNKnL.jpg',
		'http://i.imgur.com/YDJkj0v.jpg',
		'http://i.imgur.com/NUclYDi.jpg',
		'http://i.imgur.com/xuHhUcU.jpg',
		'http://i.imgur.com/K6nGfe9.jpgg',
		'http://i.imgur.com/5jH6R4e.jpg',
		'http://i.imgur.com/vdghUYQ.jpg',
		'http://i.imgur.com/NGFs3en.jpg',
		'http://i.imgur.com/RFevnZg.jpg',
		'http://i.imgur.com/S3pECPr.jpg',
		'http://i.imgur.com/7Qa4b7H.jpg',
		'http://i.imgur.com/C3lfyHe.jpg',
	];

	// Creating a variable, i, that will be the counter point for the cycling. 
	var i = 0;

	// Setting up the function to cycle through array of images with click of buttons. 
	// Right button (forward)
	$("#right").click(function() {

	    i++;
	    if ( i > 14 ) { 
	    	i = 0; 
	    };

	    var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    }); 
	});

	// Left button (backward)
	$("#left").click(function() {

	    i--;
	    if ( i < 0 ) { 
	    	i = 14; 
	    };

	    var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });   
	});

	// If side image clicked, background changes to that image and updates i for the above function
	$('#button0').click(function() {
		i = 0;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button1').click(function() {
		i = 1;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button2').click(function() {
		i = 2;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button3').click(function() {
		i = 3;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button4').click(function() {
		$('#backrect').css('background-image', 'url(http://i280.photobucket.com/albums/kk178/austingosch12/DSC_0135_zpskogj7qvc.jpg)');
		i = 4;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button5').click(function() {
		$('#backrect').css('background-image', 'url(http://i.imgur.com/lMwLFOb.jpg)');
		i = 5;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button6').click(function() {
		$('#backrect').css('background-image', 'url(http://i.imgur.com/WDzYe4x.jpg)');
		i = 6;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button7').click(function() {
		$('#backrect').css('background-image', 'url(http://i.imgur.com/QJuzOQy.jpgg)');
		i = 7;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button8').click(function() {
		$('#backrect').css('background-image', 'url(http://i280.photobucket.com/albums/kk178/austingosch12/DSC_0370%20copy_zpsundrcwat.jpg)');
		i = 8;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button9').click(function() {
		$('#backrect').css('background-image', 'url(http://i.imgur.com/1KXN6gP.jpg)');
		i = 9;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button10').click(function() {
		$('#backrect').css('background-image', 'url(http://i.imgur.com/0R9h4Cz.jpg)');
		i = 10;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button11').click(function() {
		$('#backrect').css('background-image', 'url(http://i.imgur.com/zH8lIuC.jpg)');
		i = 11;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button12').click(function() {
		$('#backrect').css('background-image', 'url(http://i.imgur.com/Ni05JWp.jpg)');
		i = 12;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	$('#button13').click(function() {
		$('#backrect').css('background-image', 'url(http://i.imgur.com/CQwx0WI.jpg)');
		i = 13;

		var img = new Image();
	    img.src = backgrounds[i];

	    var w = img.width;
	    var h = img.height;

	    var ratio = h / 619;
	    var newW = w / ratio;

	    if (newW > 929) {

	    	var hRatio = w / 929;
	    	var newH = h / hRatio;

	    	newW = (w * newH) / (h);

	    	$('#backrect').css({ 
		    	'width': newW,
		    	'height': newH,
		    	'top': 309.5 - newH / 2,
		    	'left': 636.5 - newW / 2,
		    	'background-image':  'url(' + backgrounds[i] + ')',
	    	});

	    	return
	    };

	    $('#backrect').css({ 
	    	'width': newW,
	    	'height': 619, 
	    	'top': 0,
	    	'left': 636.5 - newW / 2, 
	    	'background-image':  'url(' + backgrounds[i] + ')',
	    });
	});

	// Finding and printing date
	var today = new Date();
	$('#date').html(today.toDateString().substring(4,15));
});