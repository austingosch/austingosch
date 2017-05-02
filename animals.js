$(document).ready(function() {

	// Creating an array of images that the buttons will cycle through.
	var backgrounds = [
		'http://i.imgur.com/AD6qx42.jpg',
		'http://i.imgur.com/0tHATR4.jpg',
		'http://i.imgur.com/4kPhLQD.jpg',
		'http://i.imgur.com/tJvzxtr.jpg',
		'http://i.imgur.com/Cut61YZ.jpg',
	];

	// Creating a variable, i, that will be the counter point for the cycling. 
	var i = 0;

	// Setting up the function to cycle through array of images with click of buttons. 
	// Right button (forward)
	$("#right").click(function() {

	    i++;
	    if ( i > 4 ) { 
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
	    	i = 4; 
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

	// Finding and printing date
	var today = new Date();
	$('#date').html(today.toDateString().substring(4,15));
});