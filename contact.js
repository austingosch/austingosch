// Email validation function 
function validEmail (emailAddress) {
	var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
	return pattern.test(emailAddress);
};

// Phone number validation function
function validNumber (number) {
	var pattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
	return pattern.test(number);
}

$(document).ready(function() {

	$("#submit").click(function() {
		// Setting up variable 
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var number = $("#number").val();

		// Created to validate name
		var hasNumber = /\d/;

		// To empty previous error/success message
		$("#returnmessage").empty();

		// Checking for blank fields.
		if (name == '' || email == '' || number == '') {
			alert("Please make sure to fill out all required fields.");
		} else if (hasNumber.test(name)) { // Validating name
			alert("Please make sure to enter a valid name.");
		} else if (!validEmail(email)) { // Validating email address
			alert('Please enter a valid email address.');
		} else if (!validNumber(number)) { // Validating phonen number 
			alert('Please enter a valid phone number.');
		} else {
			// Returns success message because everything above has checked out
			$.post("contact.php", {
				name1: name,
				email1: email,
				message1: message,
				number1: number
			}, function(data) {
				// What goes here exactly?
			});
			$("#form").hide();
			$("#confirmation").text('Thank you for your message! We will get back to you shortly!')
			$("#redirect").text('You will now be directed back to the home page.')
			setTimeout(function() {
 				window.location.href = "index.html";
			}, 3000);
		};
	});
});
