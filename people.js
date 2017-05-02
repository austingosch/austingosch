$(document).ready(function() {

	// Creating an array of images that the buttons will cycle through.
	var backgrounds = [
		'http://i.imgur.com/muqHJDj.jpg',
		'http://i.imgur.com/fHPG5hy.jpg',
		'http://i.imgur.com/Kvw4gNT.jpg',
		'http://i.imgur.com/9DXbNMs.jpg',
		'http://i.imgur.com/fZJlAfK.jpg',
		'http://i.imgur.com/VR4qNU7.jpg',
		'http://i.imgur.com/TuhPNi9.jpg',
		'http://i.imgur.com/QunmH4T.jpg',
		'http://i.imgur.com/J2zFg5O.jpg',
		'http://i.imgur.com/jyO8evQ.jpg',
		'http://i.imgur.com/aLbuNkh.jpg',
	];

	// Creating a variable, i, that will be the counter point for the cycling. 
	var i = 0;

	// Setting up the function to cycle through array of images with click of buttons. 
	// Right button (forward)
	$("#right").click(function() {

	    i++;
	    if ( i > 13 ) { 
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
	    	i = 13; 
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

	// Finding and printing date
	var today = new Date();
	$('#date').html(today.toDateString().substring(4,15));
});