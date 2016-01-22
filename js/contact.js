$( document ).ready(function() {
	$('form').submit(function(event){
		event.preventDefault();
		$.ajax({
    url: "//formspree.io/danielhoang1@me.com", 
    method: "POST",
    data: {
    	email: $('js-email').val(),
    	message: $('#js-message').val(),},
    dataType: "json"
	}).error(function(jqXHR, status, error){
        alert('Could not send, something went wrong. Please try again.');
    }).success(function(data, status, jqXHR) {
            alert('Message sent! Dan will get back to you soon.');
            $('form').find('#js-email, #js-message').val('');
        });;
	});
});